import React, { FC,useState } from 'react';
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Paper,AvatarWrapper,Form,SubmitButton } from './form.style';
import { useAppSelector } from '../../app/hooks';

export const SignInDetails: FC  = () => {
  const navigate = useNavigate();
  const users = useAppSelector(state=>state.users.users)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(false);
  
  const onSetEmailChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setEmail(event.target.value)
  const onSetPasswordChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setPassword(event.target.value)

  const routeChange = () => {
    let path = `/home`;
    navigate(path);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Inside Submit Handler of Sign In button")
    console.log(users);
    console.log(email,password)
    if( users.findIndex(obj=>obj.email === email)) {
      routeChange();
    }    
    else setError(true)
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
              value={email}
              onChange={onSetEmailChanged}
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
              value={password}
              onChange={onSetPasswordChanged}
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
          {
            error && <h1>Wrong Email or Password </h1>
          }
        </Paper>
      </Container>
    </div>
  );
};
