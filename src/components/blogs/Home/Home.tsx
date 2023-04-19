import React from 'react';
import { BlogCard } from './BlogCard';
import {Grid,Box} from '@mui/material';
import { LoadingComponent } from '../../generic/LoadingComponent';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetAllBlogsQuery } from '../../../api/apiSlice';

export const Home: React.FC = () => {
  // const blogs : BlogInterface[] = useAppSelector(selectAllBlogs)
  const {
    data=[],
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetAllBlogsQuery()
  return (
  <>
  { isSuccess &&
    <Box sx={{ width: '100%' }}>  
     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
          data && data.map((blog: any) => (
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
    }
    {
      isLoading && <LoadingComponent />
    }
    </>
  );
}
