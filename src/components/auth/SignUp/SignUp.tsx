import React, { FC, useState } from 'react';
import Container from "@mui/material/Container";
import { useNavigate } from 'react-router-dom';
import { Paper, Form, } from '../form.style'
import { Redirect } from '../generic/Redirect';
import { FormButton } from '../generic/FormButton';
import { FormField } from '../generic/FormField';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { AvatarWrapper } from '../form.style'

export const SignUp: FC = () => {
  const navigate = useNavigate();
 
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
   
    setEmail('')
    setUsername('')
    setName('')
    setPassword('')
    setConfirmPassword('')

    navigate('/sign-in');
  };

  return (
    <div data-testid="sign-up-details">
      <Container component="main" maxWidth="xs">
        <Paper>
          <AvatarWrapper>
            <LockOutlinedIcon />
          </AvatarWrapper>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Form noValidate onSubmit={submitHandler} aria-label="Sign Up">

            <FormField value={name} onSetFieldChanged={(e) => setName(e.target.value)} label='Name' field='name' type='text' />

            <FormField value={username} onSetFieldChanged={(e) => setUsername(e.target.value)} label='Username' field='username' type='text' />

            <FormField value={email} onSetFieldChanged={(e) => setEmail(e.target.value)} label='Email' field='email' type='email' />

            <FormField value={password} onSetFieldChanged={(e) => setPassword(e.target.value)} field='password' label='Password' type='password' />

            <FormField value={confirmPassword} onSetFieldChanged={(e) => setConfirmPassword(e.target.value)} field='confirmPassword' label='Confirm Password' type='password' />

            <FormButton label='Sign Up' testId='sign-up' />
            <Redirect label="Already have an account? Sign in" path="/sign-in" />
          </Form>
        </Paper>
      </Container>
    </div>
  );
};

