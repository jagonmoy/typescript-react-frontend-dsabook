import {FC} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
// import { BlogView } from '../pages/BlogView';
import { Blog } from '../../../models/blogModel';
import { BlogCardContent } from './BlogCardContent';
import { convertToReadableTime} from '../../../utils/convertTime'

export const BlogCard : FC<Blog> = (blog) => {
  const navigate = useNavigate();
  const {author,blogDescription,blogHeadline,id,createdAt,updatedAt} = blog ;
  const creationTime = convertToReadableTime(createdAt);
  const updatedTime = convertToReadableTime(updatedAt)
  return (
    <Grid item xs={12} sm={10} md={16} lg={6} data-testid ="blog-card-testid">
      <Card sx={{ width: '95%', height: '100%', marginTop: 8, marginLeft: 3 }}>
        <BlogCardContent author={author} blogDescription={blogDescription} blogHeadline={blogHeadline} createdAt={creationTime} updatedAt={updatedTime}/>
        <CardActions>
          <Button size="small" onClick={() => navigate(`/blogs/${id}`)}>See More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
