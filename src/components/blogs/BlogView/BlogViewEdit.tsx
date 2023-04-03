import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { BlogIDInterface, BlogInterface } from '../../../models/blogModel';
import { useAppSelector,useAppDispatch } from '../../../app/hooks';
import { blogEdited } from '../../../slices/blogsSlice';

export const BlogViewEdit : React.FC<BlogIDInterface> = ({id}) => {
  const blogs : BlogInterface[] = useAppSelector(state=>state.blogs.blogs)
  const index : number = blogs.findIndex(blog=>blog.id === id);
  const blog : BlogInterface = blogs[index];
  const [open, setOpen] = useState<boolean>(false);
  const [blogHeadline, setBlogHeadline] = useState<string>(blog.blogHeadline);
  const [blogDescription, setBlogDescription] = useState<string>(blog.blogDescription);
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleClickOpen = () : void => {
    setOpen(true);
  };

  const handleClose = () : void => {
    setOpen(false);
  };
  const routeCurrentPage = () : void => {
    let path : string = `/blogs/${id}`; 
    navigate(path);
  }

  const handleUpdateClose = (event : React.MouseEvent<HTMLElement>) : void => {
      event.preventDefault()
      if(blogHeadline && blogDescription) {
        dispatch(blogEdited({id : id.toString(),author : blog.author,blogHeadline,blogDescription}))
      }
      routeCurrentPage();
      setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={{marginLeft : 10}} >
        <EditIcon/>
      </Button>
      <Dialog
        open={open}
        style={{width: '100%'}}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"

      >
        <DialogTitle id="form-dialog-title">EDIT BLOG</DialogTitle >
        <br/>
        <DialogContent>
            <TextareaAutosize
              id="outlined-multiline-static"
              label="Blog Headline"
              fullWidth
              multiline
              maxRows={3}
              value={blogHeadline}
            onChange={(e) => setBlogHeadline(e.target.value)}
            style = {{paddingBottom: 20}}
          />
            <TextareaAutosize
              id="outlined-multiline-static"
              label="Blog Description"
              fullWidth
              minRows={15}
              multiline
              value={blogDescription}
              onChange={(e) => setBlogDescription(e.target.value)}
            />
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button 
            onClick={handleUpdateClose} color="primary">
              Update
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog> 
    </>
  );
}