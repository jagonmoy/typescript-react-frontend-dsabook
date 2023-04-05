import React from 'react';
import { DescriptionTypography, DescriptionTextAreaAutosize } from './CreateBlog.style';
import { CreateBlogDescriptionInterface } from '../../../models/blogModel';

export const CreateBlogDescription: React.FC<CreateBlogDescriptionInterface> = ({blogDescription,setBlogDescription}) => {
    return (
        <div>
            <DescriptionTypography
                variant="h6"
                gutterBottom
                color="primary"
                fontWeight="bold"
                style={{ paddingBottom: 5 }}
            >
                BlOG DESCRIPTION
            </DescriptionTypography>
            <DescriptionTextAreaAutosize
                minRows={30}
                id="outlined-multiline-static"
                value={blogDescription}
                onChange={(event)=>setBlogDescription(event.target.value)}
            />
        </div>
    );
}
