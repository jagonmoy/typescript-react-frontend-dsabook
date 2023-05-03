import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
import { selectUsername} from '../../../slices/userSlice';
import { TextButton } from './TextButton';
import { SignedInDropdown } from './SignedInDropdown';
import IconButton from '@mui/material/IconButton';


export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const username: boolean = useAppSelector(selectUsername)

  return (
    <div data-testid="navbar">
      <AppBar position="static" color='primary'>
        <Toolbar>
          <IconButton onClick={() => navigate(`/`)}>
            <Typography variant="h6" style={{ color: 'white' }}>
              DSABOOK
            </Typography>
          </IconButton>
          <div style={{ flexGrow: 1 }} />
          {!username && <TextButton path='/sign-in' text='Sign In'/>}
          {username && <SignedInDropdown/>}
        </Toolbar>
      </AppBar>
    </div>
  );
}

