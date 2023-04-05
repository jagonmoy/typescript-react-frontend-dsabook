import React, { FC, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { useAppSelector,useAppDispatch } from '../../../app/hooks';
import { userAuth } from '../../../slices/userSlice';
import { selectUsername } from '../../../slices/userSlice';

export const SignedInDropdown: FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const currentUsername : string= useAppSelector(selectUsername)
  const dispatch = useAppDispatch()

  const actionSignOut = () : void => {
    dispatch(userAuth({
      username:'',
      status: false,
    }))
    navigate(`/sign-in`);
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
        {currentUsername}
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
        <MenuItem onClick={actionSignOut}>Sign out</MenuItem>
        <MenuItem onClick={()=>navigate(`/create-blog`)}>Create Blog</MenuItem>
      </Menu>
    </div>
  );
}
