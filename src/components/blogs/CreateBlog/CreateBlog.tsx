import React, { useState } from 'react';
import { RootContainer} from './CreateBlog.style';
import { CreateBlogHeadline } from './CreateBlogHeadline';
import { CreateBlogDescription } from './CreateBlogDescription';
import { CreateBlogButton } from './CreateBlogButton';

export const CreateBlog : React.FC = () => {
    const [blogHeadline, setBlogHeadline] = useState<string>('');
    const [blogDescription, setBlogDescription] = useState<string>('');

    return (
        <div >
            <RootContainer maxWidth="xs">
                <CreateBlogHeadline blogHeadline={blogHeadline} setBlogHeadline={setBlogHeadline}/>
                <CreateBlogDescription blogDescription ={blogDescription} setBlogDescription={setBlogDescription}/>
                <br /> <br />
                <CreateBlogButton blogHeadline={blogHeadline}  setBlogHeadline={setBlogHeadline} blogDescription ={blogDescription} setBlogDescription={setBlogDescription} />
            </RootContainer>
        </div>
    );
}