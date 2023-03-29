import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { RootContainer, HeadlineTypography, HeadlineTextAreaAutosize, DescriptionTypography, DescriptionTextAreaAutosize } from './createBlogDetails.style';
import {useAppDispatch,useAppSelector} from '../../app/hooks'
import { blogAdded } from '../../slices/blogsSlice'

export const CreateBlogDetails : React.FC = () => {
    const navigate = useNavigate()

    const [blogHeadline, setBlogHeadline] = useState('');
    const [blogDescription, setBlogDescription] = useState('');
    
    const dispatch = useAppDispatch();
    const blogsCount = useAppSelector(state=>state.blogs.blogs.length);

    const onBlogHeadlineChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setBlogHeadline(event.target.value)
    const onBlogDescriptionChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setBlogDescription(event.target.value)

    const routeHome = () => {
        let path = `/`;
        navigate(path);
    };
    const submitHandler = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        // console.log("Inside Submit Handler of Sign In button")
        if(blogHeadline && blogDescription) {
            dispatch(blogAdded({
                id: blogsCount.toString(),
                author: "Jagonmoy",
                blogHeadline,
                blogDescription
            }))
        }
        setBlogHeadline('')
        setBlogDescription('')

        routeHome();
    };

    return (
        <div>
            <RootContainer maxWidth="xs">
                <HeadlineTypography
                    variant="h6"
                    gutterBottom
                    color="primary"
                    fontWeight="bold"
                >
                    BlOG HEADLINE
                </HeadlineTypography>
                <HeadlineTextAreaAutosize
                    id="outlined-multiline-static"
                    style={{ width: '100%' }}
                    value={blogHeadline}
                    onChange={onBlogHeadlineChanged}
                />
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
                    id="outlined-multiline-static"
                    value={blogDescription}
                    onChange={onBlogDescriptionChanged}

                />
                <br /> <br />
                <Button
              data-testid='sign-in-submit'
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={submitHandler}
            >
             POST
            </Button>
            </RootContainer>
        </div>
    );
}