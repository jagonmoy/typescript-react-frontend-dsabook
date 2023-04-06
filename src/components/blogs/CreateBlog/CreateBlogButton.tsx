import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {useAppDispatch,useAppSelector} from '../../../app/hooks'
import { blogAdded } from '../../../slices/blogsSlice'
import { CreateBlogButtonInterface } from '../../../models/blogModel';
import { selectUsername } from '../../../slices/userSlice';

export const CreateBlogButton: React.FC<CreateBlogButtonInterface> = ({blogHeadline,blogDescription,setBlogHeadline,setBlogDescription}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const currentUser : string = useAppSelector(selectUsername)

    const createBlogSubmit = (event: React.FormEvent<HTMLButtonElement>) : void => {
        // console.log('Inside create Blog Submit')
        console.log(currentUser)
        event.preventDefault();
        if(blogHeadline && blogDescription) {
            dispatch(blogAdded(blogHeadline,blogDescription,currentUser))
            setBlogHeadline('')
            setBlogDescription('')
            navigate(`/`);
        }
    };
    return (
        <div>
            <Button
                data-testid='sign-in-submit'
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={createBlogSubmit}
            >
                POST
            </Button>
        </div>
    );
}
