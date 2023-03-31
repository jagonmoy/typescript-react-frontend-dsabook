import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {useAppDispatch,useAppSelector} from '../../../app/hooks'
import { blogAdded } from '../../../slices/blogsSlice'

interface Props {
    blogHeadline: string,
    setBlogHeadline: React.Dispatch<React.SetStateAction<string>>,
    blogDescription : string ,
    setBlogDescription: React.Dispatch<React.SetStateAction<string>>
}

export const CreateBlogButton: React.FC<Props> = ({blogHeadline,blogDescription,setBlogHeadline,setBlogDescription}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const blogsCount = useAppSelector(state=>state.blogs.blogs.length);
    const auth = useAppSelector(state=>state.users.auth)

    const routeHome = () => {
        let path = `/`;
        navigate(path);
    };
    const submitHandler = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if(blogHeadline && blogDescription) {
            dispatch(blogAdded({
                id: blogsCount.toString(),
                author: auth.currentUser,
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
        </div>
    );
}
