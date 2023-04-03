import React, { FC, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { useAppSelector,useAppDispatch } from '../../../app/hooks';
import { userAuth } from '../../../slices/usersSlice';
import { UserAuthInterface } from '../../../models/userModel';

export const SignedInDropdown: FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const auth : UserAuthInterface = useAppSelector(state=>state.users.auth)
  const dispatch = useAppDispatch()
  const routeSignOut = () : void => {
    let signInPath : string = `/sign-in`;
    dispatch(userAuth({
      currentUser:'',
      status: false
    }))
    navigate(signInPath);
  };
  const routeCreateblog = () => {
    let createBlogPath : string = `/create-blog`;
    navigate(createBlogPath);
  };


  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
    
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <div data-testid="signed-out-dropdown">
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color = 'inherit'
      >
        {auth.currentUser}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={routeSignOut}>Sign out</MenuItem>
        <MenuItem onClick={routeCreateblog}>Create Blog</MenuItem>
      </Menu>
    </div>
  );
}
