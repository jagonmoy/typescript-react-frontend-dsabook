import React from 'react';
import { useParams } from 'react-router-dom';
import { SingleBlogDetails } from '../../components/blogs/singleBlogDetails/SingleBlogDetails';
import { CssBaseline } from '@mui/material';
import { Navbar } from '../../components/common/Navbar';
import { BlogIDInterface } from '../../models/blogModel';

export const BlogView : React.FC = () => {
  const { id } = useParams<BlogIDInterface>();
  return (
    <div>
      <CssBaseline />
      <Navbar />
      {id && <SingleBlogDetails id = {id}/>}
    </div>
  );
}
