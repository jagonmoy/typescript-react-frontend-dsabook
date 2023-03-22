import React from 'react';
import { useParams } from 'react-router-dom';
import { SingleBlogDetails } from '../components/SingleBlogDetails';
import { CssBaseline } from '@mui/material';
import { Navbar } from '../components/Navbar';

type RouteParams = {
    id?: string
}

export const BlogView : React.FC = () => {
  const { id } = useParams<RouteParams>();
  const key = Number(id);
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <SingleBlogDetails id = {key}/>
    </div>
  );
}
