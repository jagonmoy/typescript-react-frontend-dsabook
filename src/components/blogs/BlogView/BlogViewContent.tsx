import React from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Blog } from '../../../models/blogModel';

export const BlogViewContent: React.FC<Blog> = ({ blogHeadline, blogDescription, author, createdAt, updatedAt }) => {

  return (
    <div data-testid='blog-view-content-testid'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        variant="overline"
        display="block"
        gutterBottom
        style={{ paddingRight: 5, paddingLeft: 2 }}
      >
        Authored by
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        {author}
      </Typography>
      </div>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        color="primary"
        fontWeight="bold"
        style={{ paddingBottom: 15 }}
      >
        {blogHeadline}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {blogDescription}
      </Typography>
      <Typography
        variant='inherit'
        display="block"
        gutterBottom
        style={{ paddingRight: 5, paddingLeft: 2 }}
      >
      Created At: {createdAt}
      </Typography>
      <Typography variant="inherit" display="block" gutterBottom style={{marginBottom: '10px'}}>
        Updated At: {updatedAt}
      </Typography>
      <Grid container item xs={12}>
      </Grid>
    </div>
  );
}
