import { CssBaseline } from '@mui/material';
import React from 'react';
import { Navbar } from '../../components/common/Navbar';
import { useAppSelector } from '../../app/hooks';
import { DisplayUser } from '../../components/users/DisplayUser';

export const UserList: React.FC = () => {

  const users = useAppSelector(state => state.users.users)

  return (
    <div>
      <CssBaseline />
      <Navbar />
      {
       users && users.map((user) => (
          <DisplayUser 
            key={user.username}
            name={user.name}
            username={user.username}
            email={user.email}
            password={user.password}
            confirmPassword={user.confirmPassword}
          />
        ))
      }
    </div>
  );
}
