import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { BlogIDInterface } from '../../../models/blogModel';
import { useParams } from 'react-router-dom';
import { RootContainer, BasicGrid } from './BlogView.style';
import { BlogViewContent } from './BlogViewContent';
import { BlogViewActions } from './BlogViewActions'

export const BlogView: React.FC = () => {
  const { id } = useParams<BlogIDInterface>();
  const blogs = useAppSelector(state => state.blogs.blogs)
  console.log(blogs)
  const auth = useAppSelector(state => state.users.auth)
  return (
    <div data-testid="single-blog-details">
      <RootContainer>
        <BasicGrid>
          {id && <BlogViewContent blogs={blogs} id={id} /> }
          {id && <BlogViewActions blogs={blogs} auth={auth} id={id} /> }
        </BasicGrid>
      </RootContainer>
    </div>
  );
}
