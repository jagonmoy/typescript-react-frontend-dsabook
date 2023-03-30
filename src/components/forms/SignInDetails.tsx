import React, { FC,useState } from 'react';
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Paper,AvatarWrapper,Form,SubmitButton } from './form.style';
import { useAppSelector,useAppDispatch } from '../../app/hooks';
import { userInterface } from '../../models/userModel';
import { signedIn } from '../../slices/authSlice';

export const SignInDetails: FC  = () => {
  const navigate = useNavigate();
  const users = useAppSelector(state=>state.users.users)
  const auth = useAppSelector(state=>state.auth)
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(false);
  
  const onSetEmailChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setEmail(event.target.value)
  const onSetPasswordChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => setPassword(event.target.value)

  const routeChange = () => {
    let path = `/home`;
    navigate(path);
  };
  const checkData = function  (users : userInterface[]) : number {
    let dataExists : number = - 1 ;
    for ( let i = 0 ; i < users.length ; i++) {
      if (users[i].email === email && users[i].password === password) {
        dataExists = i ;
        break ;
      }
    }
    return dataExists;
  }

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Inside Submit Handler of Sign In button");
    const userIndex : number  = checkData(users);
    if(userIndex !== -1) {
      dispatch(signedIn({
        username: users[userIndex].username,
        signedState: true
      }))
      console.log(auth)
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
