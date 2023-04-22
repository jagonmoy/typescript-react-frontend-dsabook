import React,{useState, useEffect} from 'react';
import { BlogID} from '../../../models/blogModel';
import { useParams } from 'react-router-dom';
import { RootContainer, BasicGrid } from './BlogView.style';
import { BlogViewContent } from './BlogViewContent';
import { BlogViewDelete } from './BlogViewDelete';
import { BlogViewEdit } from './BlogViewEdit';
import { useGetBlogQuery } from '../../../api/apiSlice';
import { selectUsername } from '../../../slices/userSlice';
import { useAppSelector } from '../../../app/hooks';
import { LoadingComponent } from '../../generic/LoadingComponent';

export const BlogView: React.FC =  () => {
  const { id }  = useParams<BlogID>();
  const currentUser : string = useAppSelector(selectUsername)

  const {data,isSuccess,isLoading} =  useGetBlogQuery(id)
  
  const [headline, setHeadline] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (isSuccess) {
      setHeadline(data.blogHeadline);
      setDescription(data.blogDescription);
    }
  }, [isSuccess, data?.blogHeadline, data?.blogDescription]);

  let content ;
  if(isLoading) {
    console.log('hello fetching')
    content =  <LoadingComponent/>
  }
  else if(isSuccess) {
   content = ( <div data-testid="single-blog-details">
  <RootContainer>
    <BasicGrid>

    {(<BlogViewContent blogHeadline={headline} blogDescription={description} author={data.author} id={id} />)} 

      {currentUser === data.author && <BlogViewDelete id={id} />} 
      
      {currentUser === data.author && 
          <BlogViewEdit
           blogHeadline={headline} 
           blogDescription={description}
           setBlogHeadline={(e) => setHeadline(e.target.value)} 
           setBlogDescription={(e)=>setDescription(e.target.value)}
           id={id}
           author={data.author}
          /> 
      }
     
    </BasicGrid>
  </RootContainer>
</div>) }

  return (
    <>{content}</>
   );
}
