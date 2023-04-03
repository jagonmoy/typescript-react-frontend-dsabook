import React from 'react';
import { BlogViewEdit } from './BlogViewEdit';
import { BlogViewDelete } from './BlogViewDelete';
import { BlogViewActionsInterface } from '../../../models/blogModel';

export const BlogViewActions : React.FC<BlogViewActionsInterface> = ({blogs,auth,id}) => {
    const index = blogs.findIndex(blog=>blog.id === id);
    return (
        <div style={{ paddingBottom: 20 }}>
            {auth.currentUser === blogs[index].author && <BlogViewEdit id={id} />}
            &nbsp; &nbsp;
            {auth.currentUser === blogs[index].author && <BlogViewDelete id={id} />}
        </div>
    );
}
