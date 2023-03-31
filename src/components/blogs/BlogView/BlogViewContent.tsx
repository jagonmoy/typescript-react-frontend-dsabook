import React from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { BlogInterface } from '../../../models/blogModel';

interface Props {
    blogs: BlogInterface[],
    id: string
}

export const BlogViewContent: React.FC<Props> = ({ blogs,id }) => {
  console.log("Inside Content",blogs)
  const index = Number(id);
  return (
    <div >
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            color="primary"
            fontWeight="bold"
            style={{ paddingBottom: 15 }}
          >
            { blogs[index].blogHeadline}
          </Typography>
          <Typography variant="body1" gutterBottom>
            { blogs[index].blogDescription}
          </Typography>
          <Grid container item xs={12}>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              style={{ paddingRight: 5, paddingLeft: 2 }}
            >
              Authored by
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              { blogs[index].author}
            </Typography>
          </Grid>
    </div>
  );
}
