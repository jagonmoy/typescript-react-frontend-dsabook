import { FC } from 'react';
import { BlogCard } from './BlogCard';
import { Grid, Box } from '@mui/material';
import { Blog } from '../../../models/blogModel';
import { BlogCardListProps } from '../../../models/blogModel';

export const BlogCardList: FC<BlogCardListProps> = ({ data }) => {
    const Blogs = [...data]
    Blogs.sort((a, b) => new Date(b.updatedAt.toString()).getTime() - new Date(a.updatedAt.toString()).getTime());
    return (
      <Box sx={{ width: '100%' , marginBottom: '40px' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          {Blogs.map((blog: Blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </Grid>
      </Box>
    );
  };