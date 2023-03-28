import React, { FC } from 'react';
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Paper,AvatarWrapper,Form,SubmitButton } from './form.style';

export const SignInDetails: FC  = () => {
  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/sign-up`;
    navigate(path);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Inside Submit Handler of Sign In button")
    // Handle form submission logic here
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
          <Form noValidate onSubmit={submitHandler} data-testid = "sign-in-form" aria-label='Sign In'>
            <TextField
              data-testid='email-testid'
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              data-testid="password-testid"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <SubmitButton
              data-testid='sign-in-submit'
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </SubmitButton>
            <Grid item>
              <Link onClick={routeChange} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Form>
        </Paper>
      </Container>
    </div>
  );
};
