import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { BlogIDInterface} from '../../../models/blogModel';
import { useAppDispatch, useAppSelector} from '../../../app/hooks';
import { blogDeleted } from '../../../slices/blogsSlice';
import { useDeleteBlogMutation } from '../../../api/apiSlice';
import { selectUserToken } from '../../../slices/userSlice';

export const BlogViewDelete : React.FC<BlogIDInterface> = ({id}) =>{
    const [open, setOpen] = useState<boolean>(false);
    const [deleteBlog,{isLoading,isSuccess}] = useDeleteBlogMutation()
    const token = useAppSelector(selectUserToken)
    console.log(token)
    const navigate = useNavigate()
    const deleteAndClose = async (event : React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      console.log('ksksksk')
      const request = {
        token,
        id
      }
      // console.log(request)
      try {
        await deleteBlog(request).unwrap()
        navigate(`/blogs`);
        setOpen(false);
      }catch(error) {
        console.log(error)
      }
    };

  return (
    <>
      <Button variant="contained" color="primary" onClick={()=> setOpen(true)} >
       <DeleteIcon/>
      </Button>
      <Dialog
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this?"}</DialogTitle>
        <DialogActions>
          <Button onClick={()=>setOpen(false)} color="primary">
            No
          </Button>
          <Button onClick={deleteAndClose} color="primary" autoFocus>
            Yes
         </Button>
        </DialogActions>
          </Dialog>
    </>
  );
}