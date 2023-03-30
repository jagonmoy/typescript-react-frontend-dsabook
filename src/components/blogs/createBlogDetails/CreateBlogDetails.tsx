import React, { useState } from 'react';
import { RootContainer} from './CreateBlogDetails.style';
import { CreateBlogHeadline } from './CreateBlogHeadline';
import { CreateBlogDescription } from './CreateBlogDescription';
import { CreateBlogButton } from './CreateBlogButton';

export const CreateBlogDetails : React.FC = () => {
    const [blogHeadline, setBlogHeadline] = useState('');
    const [blogDescription, setBlogDescription] = useState('');

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