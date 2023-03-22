import React from 'react';
import { BlogCard } from './BlogCard';
import { CssBaseline } from '@mui/material';
import { BlogsInterface } from '../models/blogModel';

export const BlogCardList : React.FC<BlogsInterface> = ({blogs}) => {
  return (
    <div data-testid='blog-card-list' >
      <CssBaseline/>
      {
        blogs && blogs.map((blog) => (
          <BlogCard 
            key={blog.id}
            id={blog.id}
            blogHeadline={blog.blogHeadline}
            author={blog.author}
            blogDescription={blog.blogDescription}
          />
        ))
      }
    </div>
  );
}
