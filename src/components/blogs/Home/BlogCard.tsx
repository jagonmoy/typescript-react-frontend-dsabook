import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
// import { BlogView } from '../pages/BlogView';
import { BlogInterface } from '../../../models/blogModel';
import { BlogCardContent } from './BlogCardContent';

export const BlogCard : React.FC<BlogInterface> = ({id,blogHeadline,author,blogDescription}) => {

  let navigate  = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/blogs/${id}`; 
    navigate(path);
  }

  return (
    <div data-testid='blog-card'>
      <Card sx={{ minWidth: 700,maxWidth: 700, maxHeight : 200, minHeight: 200 ,marginTop: 8}}>
      <BlogCardContent author={author} blogDescription ={blogDescription} blogHeadline = {blogHeadline}/>
      <CardActions>
        <Button size="small" onClick={routeChange}>See More</Button>
      </CardActions>
    </Card>
    </div>
  );
}
