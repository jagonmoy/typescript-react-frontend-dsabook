import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {useAppDispatch,useAppSelector} from '../../../app/hooks'
import { CreateBlogButtonInterface } from '../../../models/blogModel';
import { selectUserToken, selectUsername } from '../../../slices/userSlice';
import { useCreateBlogMutation } from '../../../api/apiSlice';


export const CreateBlogButton: React.FC<CreateBlogButtonInterface> = ({blogHeadline,blogDescription,setBlogHeadline,setBlogDescription}) => {
    const navigate = useNavigate();
    const currentUser : string = useAppSelector(selectUsername)
    const token = useAppSelector(selectUserToken);
    const [createBlog,{isLoading,isSuccess}] = useCreateBlogMutation()

    const createBlogSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
        // console.log('Inside create Blog Submit')
        console.log(currentUser)
        event.preventDefault();
        const request = {
            token ,
            blogHeadline,
            blogDescription
        }
        try {
            await createBlog(request).unwrap()
            setBlogHeadline('')
            setBlogDescription('')
            navigate(`/blogs`);
        } catch(error) {
            console.log(error)
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
