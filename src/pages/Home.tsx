import React from 'react';
import Blogs from '../data/blogs.json'
import {BlogCardList} from '../components/BlogCardList'

export const Home : React.FC = () => {
  return (
    <div>
      <BlogCardList blogs={Blogs} />
    </div>
  );
}
