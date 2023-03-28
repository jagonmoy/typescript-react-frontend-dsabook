import React from 'react';
import { useAppSelector } from '../../app/hooks';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { SingleBlogInterface } from '../../models/blogModel';
import { RootContainer,BasicGrid } from './singleBlogDetails.style';

export const SingleBlogDetails: React.FC<SingleBlogInterface> = ({ id }) => {
  const Blogs = useAppSelector(state=>state.blogs.blogs)
  return (
    <div data-testid="single-blog-details">
      <RootContainer>
        <BasicGrid>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            color="primary"
            fontWeight="bold"
            style={{ paddingBottom: 15 }}
          >
            {Blogs[id].blogHeadline}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {Blogs[id].blogDescription}
          </Typography>
          <Grid container item xs={12}>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              style={{ paddingRight: 5,paddingLeft: 2}}
            >
              Authored by
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              {Blogs[id].author}
            </Typography>
          </Grid>
        </BasicGrid>
      </RootContainer>
    </div>
  );
}
