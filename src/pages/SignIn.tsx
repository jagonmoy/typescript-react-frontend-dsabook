import React from 'react';
import { Navbar } from '../components/Navbar';
import { CssBaseline } from '@mui/material';
import {SignInDetails} from '../components/SignInDetails';

interface Props {
}

export const SignIn : React.FC<Props> = () => {
  return (
    <div>
      <CssBaseline/>
      <Navbar/>
      <SignInDetails/>
    </div>
  );
}
