import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks'
import { CreateBlogButton } from '../../../models/blogModel';
import { selectUserToken, selectUsername } from '../../../slices/userSlice';
import { useCreateBlogMutation } from '../../../api/apiSlice';
import { useAppDispatch } from '../../../app/hooks';
import { userAuth } from '../../../slices/userSlice';
import { useGenerateAccessTokenMutation } from '../../../api/apiSlice';
import { ErrorAlert } from '../../generic/ErrorAlert';
import { LoadingButton } from '@mui/lab';


export const CreateButton: React.FC<CreateBlogButton> = ({ blogHeadline, blogDescription, setBlogHeadline, setBlogDescription }) => {
    const navigate = useNavigate();
    const token = useAppSelector(selectUserToken);
    const [createBlog, {isLoading }] = useCreateBlogMutation()
    const username = useAppSelector(selectUsername)
    const dispatch = useAppDispatch();
    const [generateAccessToken] = useGenerateAccessTokenMutation()
    const [Error, setError] = useState<string>('')

    // const createBlogActions = async (token: string, blogHeadline: string, blogDescription: string) => {
    //     await createBlog({ token, blogHeadline, blogDescription }).unwrap()
    //     setBlogHeadline('')
    //     setBlogDescription('')
    //     navigate(`/blogs`);
    // }

    const createBlogSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            await createBlog({ token, blogHeadline, blogDescription }).unwrap()
            setBlogHeadline('')
            setBlogDescription('')
            navigate(`/blogs`);
        } catch (error: any) {
            if ( error.status === 'FETCH_ERROR') {
                setError('Error Fetching Data!');

            }
            if (error.status === 422) {
                setError('');
                setError(error.data[0]);
            }
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

                } catch (error: any) {
                    
                    if (error.status === 422) {
                        setError('');
                        setError(error.data[0]);
                    }
                }

            }
        };
    }
    return (
        <div>
            <LoadingButton
                onClick={createBlogSubmit}
                fullWidth
                loading={isLoading && (token !== '')}
                loadingPosition="end"
                variant="contained"
                endIcon={<></>}
            >
                <span>POST</span>
            </LoadingButton>
            {Error && <ErrorAlert error={Error} />}
        </div>
    );
}
