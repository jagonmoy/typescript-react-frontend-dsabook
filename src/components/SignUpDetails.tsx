import React, { FC } from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

interface Props {}

const Paper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

const Form = styled('form')(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(1),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

export const SignUpDetails: FC<Props> = () => {
  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/sign-in`;
    navigate(path);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
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
          <Form noValidate onSubmit={submitHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
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

