import React, { FC, useState } from 'react';
import Container from "@mui/material/Container";
import { useNavigate } from 'react-router-dom';
import { Paper, Form } from '../form.style';
import { useAppDispatch } from '../../../app/hooks';
import { userAuth } from '../../../slices/userSlice';
import { Redirect } from '../generic/Redirect';
import { FormField } from '../generic/FormField';
import { FormButton } from '../generic/FormButton';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { AvatarWrapper } from '../form.style';


export const SignIn: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    console.log('hello')
    event.preventDefault();
    if(username && password) {
      dispatch(userAuth({username, status: true}))
      navigate(`/home`);
    }
  };

  return (
    <div data-testid="sign-in-details">
      <Container component="main" maxWidth="xs">
        <Paper>
          <AvatarWrapper>
            <LockOutlinedIcon />
          </AvatarWrapper>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Form noValidate onSubmit={submitHandler} data-testid="sign-in-form" aria-label='Sign In'>

          <FormField value={username} onSetFieldChanged={(e) => setUsername(e.target.value)} label='Username' field='username' type='text' />

          <FormField value={password} onSetFieldChanged={(e) => setPassword(e.target.value)} field='password' label='Password' type='password' />

            <FormButton label='Sign In' testId='sign-in' />

            <Redirect label="Don't have an account? Sign Up" path="/sign-up" />
          </Form>
        </Paper>
      </Container>
    </div>
  );
};
