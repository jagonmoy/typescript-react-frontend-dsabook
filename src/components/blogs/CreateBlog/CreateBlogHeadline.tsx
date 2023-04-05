import React from 'react';
import { HeadlineTypography, HeadlineTextAreaAutosize } from './CreateBlog.style';
import { CreateBlogHeadlineInterface } from '../../../models/blogModel';

export const CreateBlogHeadline: React.FC<CreateBlogHeadlineInterface> = ({blogHeadline,setBlogHeadline}) => {
    return (
        <div>
            <HeadlineTypography
                variant="h6"
                gutterBottom
                color="primary"
                fontWeight="bold"
            >
                BlOG HEADLINE
            </HeadlineTypography>
            <HeadlineTextAreaAutosize
                minRows={4}
                id="outlined-multiline-static"
                style={{ width: '100%' }}
                value={blogHeadline}
                onChange={(event)=>setBlogHeadline(event.target.value)}
            />
        </div>
    );
}
