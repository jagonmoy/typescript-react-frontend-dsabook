import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { SignedOutDropdown } from '../dropdown/SignedOutDropdown';
import { useNavigate } from 'react-router-dom';

interface Props {

}

export const Navbar: React.FC<Props> = () => {
  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };
  return (
    <div data-testid="navbar">
      <AppBar position="static" color='primary'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={routeChange} data-testid="DSABook-text">
            DSABook
          </Typography>
          <SignedOutDropdown />
        </Toolbar>
      </AppBar>
    </div>
  );
}

