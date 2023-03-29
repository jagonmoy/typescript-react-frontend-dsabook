import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { BlogIDInterface } from '../../models/blogModel';
import { useAppDispatch,useAppSelector} from '../../app/hooks';
import { blogDeleted } from '../../slices/blogsSlice';


export const DeleteModal : React.FC<BlogIDInterface> = ({id}) =>{
    const [open, setOpen] = React.useState(false);
    const dispatch = useAppDispatch();
    const blogs = useAppSelector(state => state.blogs.blogs)
    const blog = blogs[id]
    const navigate = useNavigate()
    const routeHomePage = () => {
      let path = `/blogs`; 
      navigate(path);
    }

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    const handleYesClose = (event : React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      dispatch(blogDeleted(blog))
      routeHomePage();
      setOpen(false);
    };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen} >
       <DeleteIcon/>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleYesClose} color="primary" autoFocus>
            Yes
         </Button>
        </DialogActions>
          </Dialog>
    </>
  );
}