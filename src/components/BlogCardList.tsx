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
    <div>
      {
        blogs && blogs.map((blog) => (
          <BlogCard 
            {...blog}
          >
          </BlogCard>
        ))
      }
    </div>
  );
}
