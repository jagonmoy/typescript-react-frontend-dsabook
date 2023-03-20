import React from 'react';
import Blogs from '../data/blogs.json'
interface Props {
  id : number
}

export const SingleBlogDetails : React.FC<Props> = ({id}) => {
    return (
      <div>
        <h1> {Blogs[id].id}</h1>
        <h1> {Blogs[id].blogHeadline}</h1>
        <h1> {Blogs[id].author}</h1>
        <p>  {Blogs[id].blogDescription}</p>
      </div>
    );
}
