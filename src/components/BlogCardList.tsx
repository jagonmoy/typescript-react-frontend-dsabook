import React from 'react';
import { BlogCard } from './BlogCard';

interface Blog {
  id : string;
  blogHeadline: string;
  author: string; 
  blogDescription : string ;
}
interface Props {
   blogs : Blog[]
}

export const BlogCardList : React.FC<Props> = ({blogs}) => {
  return (
    <div data-testid='blog-card-list'>
      {
        blogs && blogs.map((blog) => (
          <BlogCard 
            key={blog.id}
            id={blog.id}
            blogHeadline={blog.blogHeadline}
            author={blog.author}
            blogDescription={blog.blogDescription}
          />
        ))
      }
    </div>
  );
}
