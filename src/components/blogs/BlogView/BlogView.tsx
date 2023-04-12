import React,{useState} from 'react';
import { useAppSelector } from '../../../app/hooks';
import { BlogIDInterface, BlogInterface } from '../../../models/blogModel';
import { useParams } from 'react-router-dom';
import { RootContainer, BasicGrid } from './BlogView.style';
import { BlogViewContent } from './BlogViewContent';
import { selectUsername } from '../../../slices/userSlice';
import { selectAllBlogs } from '../../../slices/blogsSlice';
import { BlogViewDelete } from './BlogViewDelete';
import { BlogViewEdit } from './BlogViewEdit';

const useFindCurrentBlog = function(id ?: string ) : BlogInterface {
  const blogs : BlogInterface[] = useAppSelector(selectAllBlogs);
  const currentBlogIndex : number = blogs.findIndex(blog => blog.id === id);
  const currentBlog : BlogInterface = blogs[currentBlogIndex];
  return currentBlog;
}

export const BlogView: React.FC = () => {
  const { id }  = useParams<BlogIDInterface>();
  const currentUser : string = useAppSelector(selectUsername)
  const currentBlog : BlogInterface = useFindCurrentBlog(id)

  const {blogHeadline,blogDescription,author} = currentBlog;
  const [headline, setHeadline] = useState<string>(blogHeadline);
  const [description, setDescription] = useState<string>(blogDescription);

  // console.log(setHeadline.arguments);

  return (
    <div data-testid="single-blog-details">
      <RootContainer>
        <BasicGrid>

          <BlogViewContent blogHeadline={blogHeadline} blogDescription={blogDescription} author={author} id={id} /> 

          {currentUser === author && <BlogViewDelete id={id} />} 
          
          {currentUser === author && 
              <BlogViewEdit
               blogHeadline={headline} 
               blogDescription={description}
               setBlogHeadline={(e) => setHeadline(e.target.value)} 
               setBlogDescription={(e)=>setDescription(e.target.value)}
               id={id}
               author={author}
              />
          }
         
        </BasicGrid>
      </RootContainer>
    </div>
   );
}
