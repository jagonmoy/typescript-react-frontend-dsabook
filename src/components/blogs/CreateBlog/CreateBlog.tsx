import React, { useState } from 'react';
import { RootContainer} from './CreateBlog.style';
import { CreateHeadline } from './CreateHeadline';
import { CreateDescription } from './CreateDescription';
import { CreateButton } from './CreateButton';

export const CreateBlog : React.FC = () => {
    const [blogHeadline, setBlogHeadline] = useState<string>('');
    const [blogDescription, setBlogDescription] = useState<string>('');

    return (
        <div >
            <RootContainer maxWidth="xs">
                <CreateHeadline blogHeadline={blogHeadline} setBlogHeadline={setBlogHeadline}/>
                <CreateDescription blogDescription ={blogDescription} setBlogDescription={setBlogDescription}/>
                <br /> <br />
                <CreateButton blogHeadline={blogHeadline}  setBlogHeadline={setBlogHeadline} blogDescription ={blogDescription} setBlogDescription={setBlogDescription} />
            </RootContainer>
        </div>
    );
}