import React, { FC, useState } from 'react';
import Container from "@mui/material/Container";
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Paper, Form, } from '../form.style'
import { useAppDispatch } from '../../../app/hooks';
import { userAdded } from '../../../slices/usersSlice';
import { Name } from './Name';
import { Username } from './Username';
import { Email } from './Email';
import { Password } from './Password';
import { ConfirmPassword } from './ConfirmPassword';
import { Headings } from './Headings';
import { Button } from './Button';
import { RedirectToSignIn } from './RedirectToSignIn';

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

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name && username && email && password && confirmPassword) {
      dispatch(userAdded({
        name,
        username,
        email,
        password,
        confirmPassword
      }))
    }
      setEmail('')
      setUsername('')
      setName('')
      setPassword('')
      setConfirmPassword('')

    routeChange()
  };

  return (
    <div data-testid="sign-up-details">
      <Container component="main" maxWidth="xs">
        <Paper>
           <Headings />
          <Form noValidate onSubmit={submitHandler} aria-label="Sign Up">
            <Grid container spacing={2}>
              <Name name={name} setName={setName}/>
              <Username username={username} setUsername={setUsername}/>
              <Email email={email} setEmail={setEmail} />
              <Password password={password} setPassword={setPassword}/>
              <ConfirmPassword confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} />
            </Grid>
             <Button />
             <RedirectToSignIn />
          </Form>
        </Paper>
      </Container>
    </div>
  );
};

