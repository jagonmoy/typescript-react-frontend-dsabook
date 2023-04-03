import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { SignedOutDropdown } from './SignedOutDropdown';
import {SignedInDropdown} from './SignedInDropdown'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
import { UserAuthInterface } from '../../../models/userModel';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const auth : UserAuthInterface = useAppSelector(state=>state.users.auth)
  const routeChange = () : void => {
    let path : string = `/`;
    navigate(path);
  };
  return (
    <div data-testid="navbar">
      <AppBar position="static" color='primary'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={routeChange} data-testid="DSABook-text">
            DSABook
          </Typography>
          {!auth.status && <SignedOutDropdown />
          }
          {
           auth.status && <SignedInDropdown/>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

