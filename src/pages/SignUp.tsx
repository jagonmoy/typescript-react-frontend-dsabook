import React from 'react';
import { Navbar } from '../components/Navbar';
import { CssBaseline } from '@mui/material';
import {SignUpDetails} from '../components/SignUpDetails';

interface Props {
}

export const SignUp : React.FC<Props> = () => {
  return (
    <div>
      <CssBaseline/>
      <Navbar/>
      <SignUpDetails/>
    </div>
  );
}
