import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {useAppDispatch,useAppSelector} from '../../../app/hooks'
import { blogAdded } from '../../../slices/blogsSlice'
import { CreateBlogButtonInterface } from '../../../models/blogModel';
import { UserAuthInterface } from '../../../models/userModel';

export const CreateBlogButton: React.FC<CreateBlogButtonInterface> = ({blogHeadline,blogDescription,setBlogHeadline,setBlogDescription}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const auth : UserAuthInterface = useAppSelector(state=>state.users.auth)

    const routeHome = () : void => {
        let path : string = `/`;
        navigate(path);
    };
    const submitHandler = (event: React.FormEvent<HTMLButtonElement>) : void => {
        event.preventDefault();
        if(blogHeadline && blogDescription) {
            dispatch(blogAdded(blogHeadline,blogDescription,auth.currentUser))
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
