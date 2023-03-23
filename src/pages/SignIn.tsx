import React from 'react';
import { Navbar } from '../components/Navbar';
import { CssBaseline } from '@mui/material';
import {SignInDetails} from '../components/SignInDetails';


export const SignIn : React.FC= () => {
  return (
    <div data-testid = "sign-in-page">
      <CssBaseline/>
      <Navbar/>
      <SignInDetails />
    </div>
  );
}
