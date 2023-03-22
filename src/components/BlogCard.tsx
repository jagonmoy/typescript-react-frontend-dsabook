import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
// import { BlogView } from '../pages/BlogView';
import { BlogInterface } from '../interfaces/blogInterface'

export const BlogCard : React.FC<BlogInterface> = ({id,blogHeadline,author,blogDescription}) => {

  let navigate  = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/blogs/${id}`; 
    navigate(path);
  }

  return (
    <div data-testid='blog-card'>
      <Card sx={{ minWidth: 300,maxWidth: 400,marginTop: 4}}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          {author}
        </Typography>
        <Typography variant="h5" component="div">
          {blogHeadline}
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <Typography variant="body2">
         {blogDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={routeChange}>See More</Button>
      </CardActions>
    </Card>
    </div>
  );
}
