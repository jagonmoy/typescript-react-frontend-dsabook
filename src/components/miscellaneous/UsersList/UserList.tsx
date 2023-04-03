import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { DisplayUser } from './DisplayUser';

export const UserList: React.FC = () => {

  const users = useAppSelector(state => state.users.users)

  return (
    <div>
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
