import React from 'react';
import { userInterface } from '../../models/userModel';

// User component to display each user
export const DisplayUser: React.FC<userInterface> = ({ name,username,email,password,confirmPassword }) => {
  return (
    <div>
      <p>name : {name}</p>
      <p>username: {username}</p>
      <p>email: {email}</p>
    </div>
  );
};