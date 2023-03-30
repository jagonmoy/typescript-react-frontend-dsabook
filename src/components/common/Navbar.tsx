import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { SignedOutDropdown } from '../dropdown/SignedOutDropdown';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
interface Props {

}

export const Navbar: React.FC<Props> = () => {
  const navigate = useNavigate();
  const auth = useAppSelector(state=>state.auth)
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
          {!auth.signedState && <SignedOutDropdown />
          }
          {
           auth.signedState && <h3>{auth.username}</h3>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

