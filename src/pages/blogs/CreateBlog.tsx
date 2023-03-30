import React from 'react';
import { CreateBlogDetails } from '../../components/blogs/createBlogDetails/CreateBlogDetails';
import { CssBaseline } from '@mui/material';
import { Navbar } from '../../components/common/Navbar';

export const CreateBlog : React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <CreateBlogDetails/>
    </div>
  );
}
