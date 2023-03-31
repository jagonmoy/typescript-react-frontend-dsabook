import React from 'react';
import { BlogCard } from './BlogCard';
import { CssBaseline } from '@mui/material';
import { useAppSelector } from '../../../app/hooks';
import Box from '@mui/material/Box';

export const Home : React.FC = () => {
  const blogs = useAppSelector(state=>state.blogs.blogs)
  console.log(blogs);
  return (
    <div>
      <Box display="flex" justifyContent="center" >
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
      </Box>
    </div>
  );
}
