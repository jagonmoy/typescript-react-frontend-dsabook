import { FC } from 'react';
import { BlogCard } from './BlogCard';
import { Grid, Box } from '@mui/material';
import { Blog } from '../../../models/blogModel';
import { BlogCardListProps } from '../../../models/blogModel';

export const BlogCardList: FC<BlogCardListProps> = ({ data }) => {
    return (
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {data.map((blog: Blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </Grid>
      </Box>
    );
  };