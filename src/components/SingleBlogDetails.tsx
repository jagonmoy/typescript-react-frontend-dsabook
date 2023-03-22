import React from 'react';
import Blogs from '../data/blogs.json'
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

interface Props {
  id: number
}
const RootContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  marginLeft: theme.spacing(10)
}));

const BasicGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: "block",
  width: "100%",
  transitionDuration: "0.3s",
}));

export const SingleBlogDetails: React.FC<Props> = ({ id }) => {
  return (
    <div>
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
