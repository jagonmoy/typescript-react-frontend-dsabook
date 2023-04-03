import React, { FC,useState } from 'react';
import Container from "@mui/material/Container";
import { useNavigate } from 'react-router-dom';
import { Paper,Form} from '../form.style';
import { useAppSelector,useAppDispatch } from '../../../app/hooks';
import { UserInterface } from '../../../models/userModel';
import { userAuth } from '../../../slices/usersSlice';
import { Password } from './Password';
import { Email } from './Email';
import { Heading } from './Heading';
import { Button } from './Button';
import { RedirectToSignUp } from './RedirectToSignUp';;

export const SignIn: FC  = () => {
  const navigate = useNavigate();
  const users = useAppSelector(state=>state.users.users)
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(false);
  
  const routeHome = () => {
    let path = `/home`;
    navigate(path);
  };

  const checkData = function  (users : UserInterface[]) : number {
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
    const userIndex : number  = checkData(users);
    if(userIndex !== -1) {
      dispatch(userAuth({
         currentUser : users[userIndex].username ,
         status : true
      }))
      routeHome();
    }    
    else setError(true)
  };

  return (
    <div data-testid="sign-in-details">
      <Container component="main" maxWidth="xs">
        <Paper>
          <Heading />
          <Form noValidate onSubmit={submitHandler} data-testid = "sign-in-form" aria-label='Sign In'>
            <Email setEmail={setEmail} email ={email} /> 
            <Password setPassword = {setPassword}  password ={password}/>
            <Button />
            <RedirectToSignUp />
          </Form>
          {
            error && <h1>Wrong Email or Password </h1>
          }
        </Paper>
      </Container>
    </div>
  );
};
