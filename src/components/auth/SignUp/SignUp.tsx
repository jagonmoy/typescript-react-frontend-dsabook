import React, { FC, useState } from 'react';
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Paper, AvatarWrapper, Form, SubmitButton } from '../form.style'
import { useAppDispatch } from '../../../app/hooks';
import { userAdded } from '../../../slices/usersSlice';

export const SignUp: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const routeChange = () => {
    let path = `/users`;
    navigate(path);
  };

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSetNameChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setName(event.target.value)

  const onSetUsernameChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setUsername(event.target.value)

  const onSetEmailChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setEmail(event.target.value)

  const onSetPasswordChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setPassword(event.target.value)

  const onSetConfirmPasswordChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setConfirmPassword(event.target.value)

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("hi")
    event.preventDefault();
    if (name && username && email && password && confirmPassword) {
      console.log("hlw")
      dispatch(userAdded({
        name,
        username,
        email,
        password,
        confirmPassword
      }))
    }
    //   setEmail('')
    //   setUsername('')
    //   setName('')
    //   setPassword('')
    //   setConfirmPassword('')

    routeChange()
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
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="text"
                  id="name"
                  label="Name"
                  value={name}
                  name="name"
                  autoComplete="name"
                  onChange={onSetNameChanged}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="text"
                  id="username"
                  value={username}
                  onChange={onSetUsernameChanged}
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="email"
                  value={email}
                  onChange={onSetEmailChanged}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  value={password}
                  onChange={onSetPasswordChanged}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  value={confirmPassword}
                  onChange={onSetConfirmPasswordChanged}
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <SubmitButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign Up
            </SubmitButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={routeChange} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Form>
        </Paper>
      </Container>
    </div>
  );
};

