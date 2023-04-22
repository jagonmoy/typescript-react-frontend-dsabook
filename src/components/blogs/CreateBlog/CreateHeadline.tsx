import React from 'react';
import { HeadlineTypography, HeadlineTextAreaAutosize } from './CreateBlog.style';
import { CreateBlogHeadline } from '../../../models/blogModel';

export const CreateHeadline: React.FC<CreateBlogHeadline> = ({blogHeadline,setBlogHeadline}) => {
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
                data-testid="blog-headline-testid"
                style={{ width: '100%' }}
                value={blogHeadline}
                onChange={(event)=>setBlogHeadline(event.target.value)}
            />
        </div>
    );
}
