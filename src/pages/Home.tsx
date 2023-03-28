import React from 'react';
import { BlogCardList} from '../components/blogs/BlogCardList'
import { Navbar } from '../components/common/Navbar';
import { CssBaseline } from '@mui/material';
import { useAppSelector } from '../app/hooks';
import Box from '@mui/material/Box';

export const Home : React.FC = () => {
  const Blogs = useAppSelector(state=>state.blogs.blogs)
  console.log(Blogs);
  return (
    <div>
      <CssBaseline/>
      <Navbar/>
      <Box display="flex" justifyContent="center" >
        <BlogCardList blogs={Blogs} />
      </Box>
    </div>
  );
}
