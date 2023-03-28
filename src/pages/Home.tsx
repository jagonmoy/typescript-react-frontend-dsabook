import React from 'react';
import Blogs from '../data/blogs.json'
import {BlogCardList} from '../components/blogs/BlogCardList'
import { Navbar } from '../components/common/Navbar';
import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';

export const Home : React.FC = () => {
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
