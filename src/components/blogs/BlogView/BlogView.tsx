import React,{useState} from 'react';
import { BlogIDInterface} from '../../../models/blogModel';
import { useParams } from 'react-router-dom';
import { RootContainer, BasicGrid } from './BlogView.style';
import { BlogViewContent } from './BlogViewContent';
import { BlogViewDelete } from './BlogViewDelete';
import { BlogViewEdit } from './BlogViewEdit';
import { useGetBlogQuery } from '../../../api/apiSlice';
import { LoadingComponent } from '../../generic/LoadingComponent';
import { selectUsername } from '../../../slices/userSlice';
import { useAppSelector } from '../../../app/hooks';

export const BlogView: React.FC =  () => {
  const { id }  = useParams<BlogIDInterface>();
  const currentUser : string = useAppSelector(selectUsername)

  const {data,isError,isLoading,isSuccess,error} =  useGetBlogQuery(id)
  let blogHeadline,blogDescription,author ;
  if(isSuccess) ({blogDescription,blogHeadline,author} = data);
  
  const [headline, setHeadline] = useState(blogHeadline);
  const [description, setDescription] = useState(blogDescription);
  console.log(author)
  console.log(currentUser)
  // console.log(setHeadline.arguments);

  return (
    <>
    { isSuccess && 
    <div data-testid="single-blog-details">
      <RootContainer>
        <BasicGrid>

          {blogHeadline && blogDescription && author && (<BlogViewContent blogHeadline={blogHeadline} blogDescription={blogDescription} author={author} id={id} />)} 

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
    }
    </>
   );
}
