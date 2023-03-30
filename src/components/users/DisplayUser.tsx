import React from 'react';
import { UserInterface } from '../../models/userModel';

// User component to display each user
export const DisplayUser: React.FC<UserInterface> = ({ name,username,email,password,confirmPassword }) => {
  return (
    <div>
      <p>name : {name}</p>
      <p>username: {username}</p>
      <p>email: {email}</p>
    </div>
  );
};