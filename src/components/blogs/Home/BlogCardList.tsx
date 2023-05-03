import { FC } from 'react';
import { BlogCard } from './BlogCard';
import { Grid, Box } from '@mui/material';
import { Blog } from '../../../models/blogModel';
import { BlogCardListProps } from '../../../models/blogModel';

export const BlogCardList: FC<BlogCardListProps> = ({ data }) => {
    const Blogs = [...data]
    Blogs.sort((a, b) => new Date(b.updatedAt.toString()).getTime() - new Date(a.updatedAt.toString()).getTime());
    return (
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {Blogs.map((blog: Blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </Grid>
      </Box>
    );
  };