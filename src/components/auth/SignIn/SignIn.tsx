import React, { FC, useState } from 'react';
import Container from "@mui/material/Container";
import { useNavigate } from 'react-router-dom';
import { Paper, Form } from '../../generic/form/form.style';
import { useAppDispatch } from '../../../app/hooks';
import { selectUserToken, userAuth } from '../../../slices/userSlice';
import { useAppSelector } from '../../../app/hooks';
import { Redirect } from '../../generic/Redirect';
import { FormField } from '../../generic/form/FormField';
import { FormButton } from '../../generic/form/FormButton';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { AvatarWrapper } from '../../generic/form/form.style';
import { useAuthUserMutation } from '../../../slices/apiSlice';
import { ErrorAlert } from '../../generic/ErrorAlert';
import { displayError } from '../../../utils/errorHandler';

const HeaderAndIcon = () => {
  return (
    <>   
    <AvatarWrapper>
      <LockOutlinedIcon />
    </AvatarWrapper>
    <Typography component="h1" variant="h5">
        Sign in
    </Typography>
    </>
  )
}

export const SignIn: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [authUser, { isLoading }] = useAuthUserMutation()
  const token = useAppSelector(selectUserToken)

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [Error, setError] = useState<string>('')
  
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Sign in SubmitHandler')
    try {
      const response = await authUser({ token, username, password }).unwrap();
      setUsername('')
      setPassword('')
      dispatch(userAuth({
        username: username,
        accessToken: response.accessToken
      }))
      // console.log(response.accessToken)
      localStorage.setItem('refreshToken', response.refreshToken);
      localStorage.setItem('username', username)
      navigate('/');
    } catch (error: any) {displayError(error.status, setError, error.data)
      
    }
  };
 
  return (
    <div data-testid="sign-in-details">
      <Container component="main" maxWidth="xs">
        <Paper>
          <HeaderAndIcon/>
          <Form noValidate onSubmit={submitHandler} data-testid="sign-in-form" aria-label='Sign In'>

            <FormField value={username} onSetFieldChanged={(e) => setUsername(e.target.value)} label='Username' field='username' type='text' />

            <FormField value={password} onSetFieldChanged={(e) => setPassword(e.target.value)} field='password' label='Password' type='password' />

            <FormButton label='Sign In' testId='sign-in' isLoading={isLoading} />
            <Redirect label="Don't have an account? Sign Up" path="/sign-up" />
          </Form>
          {Error && <ErrorAlert error={Error} />}
        </Paper>
      </Container>
    </div>
  );
};
