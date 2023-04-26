import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { BlogEdit } from '../../../models/blogModel';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { useEditBlogMutation } from '../../../api/apiSlice';
import { selectUserToken, selectUsername } from '../../../slices/userSlice';
import { useGenerateAccessTokenMutation } from '../../../api/apiSlice';
import { userAuth } from '../../../slices/userSlice';
import { LoadingButton } from '@mui/lab';

export const BlogViewEdit: React.FC<BlogEdit> = ({ id, blogHeadline, blogDescription, author, setBlogHeadline, setBlogDescription }) => {

  const [open, setOpen] = useState<boolean>(false);
  const [editBlog, { isLoading}] = useEditBlogMutation();
  const token = useAppSelector(selectUserToken);
  const username = useAppSelector(selectUsername)
  const [generateAccessToken] = useGenerateAccessTokenMutation()
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const updateAndClose = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    const request = { id, blogHeadline, blogDescription, token }
    try {
      await editBlog(request).unwrap();
      navigate(`/blogs/${id}`);
      setOpen(false);
    } catch (error: any) {
      if (error.status === 401 && username.length) {
        const refreshToken = localStorage.getItem('refreshToken');
        const { accessToken: newAccessToken } = await generateAccessToken({ refreshToken }).unwrap();
        dispatch(userAuth({
          username: username,
          accessToken: newAccessToken
        }))
        const request = { id, blogHeadline, blogDescription, token: newAccessToken }
        try {
          await editBlog(request).unwrap();
          navigate(`/blogs/${id}`);
          setOpen(false);
        } catch (error) {
        }
      }
    }
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)} style={{ marginLeft: 10 }} data-testid='edit-button' >
        <EditIcon />
      </Button>
      <Dialog
        open={open}
        style={{ width: '100%' }}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"

      >
        <DialogTitle id="form-dialog-title">EDIT BLOG</DialogTitle >
        <br />
        <DialogContent>
          <TextareaAutosize
            id="outlined-multiline-static"
            label="Blog Headline"
            data-testid='blog-headline-input'
            fullWidth
            multiline
            maxRows={3}
            value={blogHeadline}
            onChange={setBlogHeadline}
            style={{ paddingBottom: 20 }}
          />
          <TextareaAutosize
            id="outlined-multiline-static"
            label="Blog Description"
            fullWidth
            data-testid='blog-description-input'
            minRows={15}
            multiline
            value={blogDescription}
            onChange={setBlogDescription}
          />
          <DialogActions>
            <Button onClick={() => setOpen(false)} color="primary">
              Cancel
            </Button>
            <LoadingButton
              size="small"
              onClick={updateAndClose}
              loading={isLoading && token}
              variant="contained"
            >
              <span>Edit</span>
            </LoadingButton>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}