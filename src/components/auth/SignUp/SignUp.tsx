import React, { FC, useState } from 'react';
import Container from "@mui/material/Container";
import { useNavigate } from 'react-router-dom';
import { Paper, Form, } from '../../generic/form/form.style'
import { Redirect } from '../../generic/Redirect';
import { FormButton } from '../../generic/form/FormButton';
import { FormField } from '../../generic/form/FormField';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { AvatarWrapper } from '../../generic/form/form.style'
import { useAddNewUserMutation } from '../../../api/apiSlice';

export const SignUp: FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [addNewUser, { isLoading, isSuccess }] = useAddNewUserMutation();

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const requestBody = {name, email, password, confirmPassword, username};
    try {
      await addNewUser(requestBody).unwrap();
      setEmail('')
      setUsername('')
      setName('')
      setPassword('')
      setConfirmPassword('')
      navigate('/sign-in');
    } catch (error) {
      console.log(error);
    }
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
          <Form noValidate onSubmit={submitHandler} data-testid="sign-up-form" aria-label="Sign Up">

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

