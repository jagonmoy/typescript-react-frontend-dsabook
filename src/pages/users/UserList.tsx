import { CssBaseline } from '@mui/material';
import React from 'react';
import { Navbar } from '../../components/common/Navbar';

export const UserList : React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar/>
      This is Users List
    </div>
  );
}
