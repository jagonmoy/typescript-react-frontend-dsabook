import React from 'react';
import { useParams } from 'react-router-dom';
import { SingleBlogDetails } from '../components/SingleBlogDetails';
import { CssBaseline } from '@mui/material';
import { Navbar } from '../components/Navbar';
import { RouteBlogView } from '../models/blogModel';

export const BlogView : React.FC = () => {
  const { id } = useParams<RouteBlogView>();
  const key = Number(id);
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <SingleBlogDetails id = {key}/>
    </div>
  );
}
