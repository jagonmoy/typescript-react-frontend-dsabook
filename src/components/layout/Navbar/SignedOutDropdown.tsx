import React, { FC } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

export const SignedOutDropdown: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [open, setOpen] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const routeSignIn = () => {
    let signInPath = `/sign-in`;
    navigate(signInPath);
  };
  const routeSignUp = () => {
    let signUpPath = `/sign-up`;
    navigate(signUpPath);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
    console.log("Menu opened")
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
