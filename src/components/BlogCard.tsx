import React from 'react';
// import { BlogView } from '../pages/BlogView';


interface Props {
  id : string,
  blogHeadline: string ,
  author : string ,
  blogDescription : string
}

export const BlogCard : React.FC<Props> = ({id,blogHeadline,author,blogDescription}) => {
  return (
    <div data-testid='blog-card'>
      <h1>{blogHeadline}</h1>
      <h1>{author}</h1>
      <p>{blogDescription}</p>
    </div>
  );
}
