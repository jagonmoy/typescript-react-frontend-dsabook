import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks'
import { CreateBlogButton } from '../../../models/blogModel';
import { selectUserToken} from '../../../slices/userSlice';
import { useCreateBlogMutation } from '../../../slices/apiSlice';
import { ErrorAlert } from '../../generic/ErrorAlert';
import { LoadingButton } from '@mui/lab';
import { displayError } from '../../../utils/errorHandler';


export const CreateButton: React.FC<CreateBlogButton> = ({ blogHeadline, blogDescription, setBlogHeadline, setBlogDescription }) => {
    const navigate = useNavigate();
    const token = useAppSelector(selectUserToken);
    const [createBlog, {isLoading }] = useCreateBlogMutation()
    const [Error, setError] = useState<string>('')

    const createBlogSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            await createBlog({ token, blogHeadline, blogDescription }).unwrap()
            setBlogHeadline('')
            setBlogDescription('')
            navigate(`/blogs`);
        } catch (error: any) {
            displayError(error.status,setError,error.data)
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
