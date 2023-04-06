import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BlogCardContentInterface } from '../../../models/blogModel';

export const BlogCardContent : React.FC<BlogCardContentInterface> = ({blogHeadline,author,blogDescription}) => {

  return (
    <div >
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          {author}
        </Typography>
        <Typography variant="h5" component="div">
          {blogHeadline}
        </Typography>
        <Typography variant="body2">
         { blogDescription.length > 80 && blogDescription.substring(0,80).concat(' ...')}
         { blogDescription.length <= 80 && blogDescription}
        </Typography>
      </CardContent>
    </div>
  );
}
