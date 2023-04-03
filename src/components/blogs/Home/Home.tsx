import React from 'react';
import { BlogCard } from './BlogCard';
import { useAppSelector } from '../../../app/hooks';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const Home: React.FC = () => {
  const blogs = useAppSelector(state => state.blogs.blogs)
  console.log(blogs);
  return (
    <Box sx={{ width: '100%' }}>
     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
      </Grid>
    </Box>
  );
}
