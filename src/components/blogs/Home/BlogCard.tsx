import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
// import { BlogView } from '../pages/BlogView';
import { BlogInterface } from '../../../models/blogModel';
import { BlogCardContent } from './BlogCardContent';

export const BlogCard: React.FC<BlogInterface> = ({ id, blogHeadline, author, blogDescription }) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={6} data-testid ="blog-card-testid">
      <Card sx={{ width: "90%", height: 200, marginTop: 8, marginLeft: 3 }}>
        <BlogCardContent author={author} blogDescription={blogDescription} blogHeadline={blogHeadline}/>
        <CardActions>
          <Button size="small" onClick={() => navigate(`/blogs/${id}`)}>See More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
