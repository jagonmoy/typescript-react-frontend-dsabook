import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { BlogIDInterface } from '../../../models/blogModel';
import { RootContainer, BasicGrid } from './singleBlogDetails.style';
import { SingleBlogContent } from './SingleBlogContent';
import { SingleBlogActions } from './SingleBlogActions'

export const SingleBlogDetails: React.FC<BlogIDInterface> = ({ id }) => {
  const blogs = useAppSelector(state => state.blogs.blogs)
  const auth = useAppSelector(state=> state.users.auth)
  return (
    <div data-testid="single-blog-details">
      <RootContainer>
        <BasicGrid>
          <SingleBlogContent blogs={blogs} id ={id} />
          <SingleBlogActions blogs={blogs} auth={auth} id ={id}/>
        </BasicGrid>
      </RootContainer>
    </div>
  );
}
