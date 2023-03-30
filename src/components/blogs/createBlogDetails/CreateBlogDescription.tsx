import React from 'react';
import { DescriptionTypography, DescriptionTextAreaAutosize } from './CreateBlogDetails.style';

interface Props {
    blogDescription : string ,
    setBlogDescription: React.Dispatch<React.SetStateAction<string>>
}

export const CreateBlogDescription: React.FC<Props> = ({blogDescription,setBlogDescription}) => {
    const onBlogDescriptionChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setBlogDescription(event.target.value)

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
                onChange={onBlogDescriptionChanged}
            />
        </div>
    );
}
