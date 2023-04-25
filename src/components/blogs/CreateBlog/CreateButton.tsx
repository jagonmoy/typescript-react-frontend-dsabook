import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks'
import { CreateBlogButton } from '../../../models/blogModel';
import { selectUserToken, selectUsername } from '../../../slices/userSlice';
import { useCreateBlogMutation } from '../../../api/apiSlice';
import { useAppDispatch } from '../../../app/hooks';
import { userAuth } from '../../../slices/userSlice';
import { useGenerateAccessTokenMutation } from '../../../api/apiSlice';


export const CreateButton: React.FC<CreateBlogButton> = ({ blogHeadline, blogDescription, setBlogHeadline, setBlogDescription }) => {
    const navigate = useNavigate();
    const token = useAppSelector(selectUserToken);
    const [createBlog] = useCreateBlogMutation()
    const username = useAppSelector(selectUsername)
    const dispatch = useAppDispatch();
    const [generateAccessToken] = useGenerateAccessTokenMutation()

    const createBlogSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const request = {
            token,
            blogHeadline,
            blogDescription
        }
        try {
            await createBlog(request).unwrap()
            setBlogHeadline('')
            setBlogDescription('')
            navigate(`/blogs`);
        } catch (error: any) {
            if (error.status === 401 && username.length) {
                const refreshToken = localStorage.getItem('refreshToken');
                console.log(refreshToken)
                const { accessToken: newAccessToken } = await generateAccessToken({ refreshToken }).unwrap();
                dispatch(userAuth({
                    username: username,
                    accessToken: newAccessToken
                }))
                let request = {
                    token: newAccessToken,
                    blogHeadline,
                    blogDescription
                }
                try {
                    console.log('asdasd')
                    await createBlog(request).unwrap()
                    setBlogHeadline('')
                    setBlogDescription('')
                    navigate(`/blogs`);

                } catch (error) {

                }

            }
        };
    }
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
