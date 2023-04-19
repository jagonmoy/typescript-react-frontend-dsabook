import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { SignedOutDropdown } from './SignedOutDropdown';
import {SignedInDropdown} from './SignedInDropdown'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
import { selectUsername} from '../../../slices/userSlice';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const username: boolean = useAppSelector(selectUsername)
  return (
    <div data-testid="navbar">
      <AppBar position="static" color='primary'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={()=> navigate(`/`)}data-testid="DSABook-text">
            DSABook
          </Typography>
          {!username && <SignedOutDropdown />}
          {username && <SignedInDropdown/>}
        </Toolbar>
      </AppBar>
    </div>
  );
}

