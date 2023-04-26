import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { BlogID } from '../../../models/blogModel';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { useDeleteBlogMutation, useGenerateAccessTokenMutation } from '../../../api/apiSlice';
import { selectUser } from '../../../slices/userSlice';
import { UserState } from '../../../models/userModel';
import { userAuth } from '../../../slices/userSlice';
import { LoadingButton } from '@mui/lab';


export const BlogViewDelete: React.FC<BlogID> = ({ id }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [deleteBlog,{isLoading}] = useDeleteBlogMutation()
  const currentUser: UserState = useAppSelector(selectUser)
  const { accessToken: token, username } = currentUser;
  const [generateAccessToken] = useGenerateAccessTokenMutation()
  const dispatch = useAppDispatch();

  const navigate = useNavigate()
  const deleteAndClose = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    let request = {
      token,
      id
    }
    try {
      await deleteBlog(request).unwrap()
      navigate(`/blogs`);
      setOpen(false);
    } catch (error: any) {
      if (error.status === 401 && username.length) {
        const refreshToken = localStorage.getItem('refreshToken');
        const { accessToken: newAccessToken } = await generateAccessToken({ refreshToken }).unwrap();
        dispatch(userAuth({
          username: username,
          accessToken: newAccessToken
        }))
        let request = {
          token : newAccessToken,
          id
        }
        try {
          console.log('asdasd')
          await deleteBlog(request).unwrap()
          navigate(`/blogs`);
          setOpen(false);
        } catch (error) {
        }
      }
    }
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)} >
        <DeleteIcon />
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this?"}</DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            No
          </Button>
          {/* <Button onClick={deleteAndClose} color="primary" autoFocus>
            Yes
          </Button> */}
          <LoadingButton
              onClick={deleteAndClose}
              loading={isLoading && (token !== '')}
            >
              <span>Yes</span>
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}