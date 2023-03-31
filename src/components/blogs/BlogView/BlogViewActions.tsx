import React from 'react';
import { BlogInterface } from '../../../models/blogModel';
import { UserAuthInterface } from '../../../models/userModel';
import { BlogViewEdit } from './BlogViewEdit';
import { BlogViewDelete } from './BlogViewDelete';

interface Props {
    blogs: BlogInterface[],
    auth: UserAuthInterface,
    id: string
}

export const BlogViewActions : React.FC<Props> = ({blogs,auth,id}) => {
    const index = Number(id);
    return (
        <div style={{ paddingBottom: 20 }}>
            {auth.currentUser === blogs[index].author && <BlogViewEdit id={id} />}
            &nbsp; &nbsp;
            {auth.currentUser === blogs[index].author && <BlogViewDelete id={id} />}
        </div>
    );
}
