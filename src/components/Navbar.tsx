import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { SignedOutDropdown } from './SignedOutDropdown';
import { useNavigate } from 'react-router-dom';

interface Props {

}

export const Navbar : React.FC<Props> = () => { 
  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };
  return (
      <AppBar position="static" color = 'primary'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick = {routeChange}>
            DSABook
          </Typography>
          <SignedOutDropdown/>
        </Toolbar>
      </AppBar>
  );
}

