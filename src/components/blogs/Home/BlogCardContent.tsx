import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BlogContent } from '../../../models/blogModel';

export const BlogCardContent : React.FC<BlogContent> = ({blogHeadline,author,blogDescription,createdAt,updatedAt}) => {
  return (
    <div >
      <CardContent data-testid="card-content-testid">
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ fontSize: 10 }} color="inherit" gutterBottom style={{marginRight: '5px'}}>
          Created At: {createdAt}
        </Typography>
        <Typography sx={{ fontSize: 10 }} color="inherit" gutterBottom>
          Updated At: {updatedAt}
        </Typography>
        </div>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          {author}
        </Typography>
        <Typography variant="h5" component="div">
        { blogHeadline.length > 50 && blogHeadline.substring(0,50).concat(' ...')}
         { blogHeadline.length <=50  && blogHeadline}
        </Typography>
        <Typography variant="body2">
         { blogDescription.length > 300 && blogDescription.substring(0,300).concat(' ...')}
         { blogDescription.length <= 300 && blogDescription}
        </Typography>
      </CardContent>
    </div>
  );
}
