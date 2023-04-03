import React, { FC,useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

export const SignedOutDropdown: FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const routeSignIn = () : void => {
    let signInPath : string = `/sign-in`;
    navigate(signInPath);
  };
  const routeSignUp = () : void => {
    let signUpPath : string = `/sign-up`;
    navigate(signUpPath);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) : void => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
    
  };
  const handleClose = () : void => {
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
        AUTH
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
        <MenuItem onClick={routeSignIn}>Sign in</MenuItem>
        <MenuItem onClick={routeSignUp}>Sign up</MenuItem>
      </Menu>
    </div>
  );
}
