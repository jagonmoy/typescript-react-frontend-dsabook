import { FC } from 'react';
import { BlogCard } from './BlogCard';
import { Grid, Box } from '@mui/material';
import { LoadingPage } from '../../generic/LoadingPage';
import { useGetAllBlogsQuery } from '../../../api/apiSlice';
import { Blog } from '../../../models/blogModel';

export const Home: FC = () => {
  const {
    data = [],
    isLoading,
  } = useGetAllBlogsQuery()

  const BlogCardList = () => {
    return (
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {
            data && data.map((blog: Blog) => (
             <BlogCard {...blog} />
            ))
          }
        </Grid>
      </Box>
    )
  }

  if (isLoading) return <LoadingPage />
  return <BlogCardList />
}
