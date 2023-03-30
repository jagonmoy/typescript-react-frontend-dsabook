import React from 'react';
import { BlogInterface } from '../../../models/blogModel';
import { UserAuthInterface } from '../../../models/userModel';
import { EditModal } from '../../modals/EditModal';
import { DeleteModal } from '../../modals/DeleteModal';

interface Props {
    blogs: BlogInterface[],
    auth: UserAuthInterface,
    id: string
}

export const SingleBlogActions: React.FC<Props> = ({blogs,auth,id}) => {
    const index = Number(id);
    return (
        <div style={{ paddingBottom: 20 }}>
            {auth.currentUser === blogs[index].author && <EditModal id={id} />}
            &nbsp; &nbsp;
            {auth.currentUser === blogs[index].author && <DeleteModal id={id} />}
        </div>
    );
}
