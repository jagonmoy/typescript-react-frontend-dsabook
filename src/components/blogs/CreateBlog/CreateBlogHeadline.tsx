import React from 'react';
import { HeadlineTypography, HeadlineTextAreaAutosize } from './CreateBlog.style';

interface Props {
    blogHeadline: string,
    setBlogHeadline: React.Dispatch<React.SetStateAction<string>>
}

export const CreateBlogHeadline: React.FC<Props> = ({blogHeadline,setBlogHeadline}) => {

    const onBlogHeadlineChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setBlogHeadline(event.target.value)

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
                onChange={onBlogHeadlineChanged}
            />
        </div>
    );
}
