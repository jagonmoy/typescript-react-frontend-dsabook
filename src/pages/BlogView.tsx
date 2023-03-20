import React from 'react';
import { useParams } from 'react-router-dom';
import { SingleBlogDetails } from '../components/SingleBlogDetails';

type RouteParams = {
    id?: string
}

export const BlogView : React.FC = () => {
  const { id } = useParams<RouteParams>();
  const key = Number(id);
  return (
    <div>
      <SingleBlogDetails id = {key}/>
    </div>
  );
}
