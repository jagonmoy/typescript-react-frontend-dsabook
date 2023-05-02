import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { BlogID } from '../../../models/blogModel';
import { useAppSelector} from '../../../app/hooks';
import { useDeleteBlogMutation} from '../../../slices/apiSlice';
import { selectUser } from '../../../slices/userSlice';
import { UserState } from '../../../models/userModel';
import { LoadingButton } from '@mui/lab';


export const BlogViewDelete: React.FC<BlogID> = ({ id }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [deleteBlog,{isLoading}] = useDeleteBlogMutation()
  const currentUser: UserState = useAppSelector(selectUser)
  const { accessToken: token} = currentUser;

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