import  { FC} from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useAppSelector,useAppDispatch } from '../../../app/hooks';
import { userAuth } from '../../../slices/userSlice';
import { selectUsername } from '../../../slices/userSlice';
import { useSignOutMutation } from '../../../slices/apiSlice';
import { Typography } from '@mui/material';


export const SignOut: FC = () => {
  const navigate = useNavigate();
  const currentUsername : string= useAppSelector(selectUsername)
  const dispatch = useAppDispatch()
  const [signOut] = useSignOutMutation()
  const refreshToken = localStorage.getItem('refreshToken')

  const actionSignOut = async() => {
    dispatch(userAuth({
      username:'',
      accessToken: ''
    }))
    navigate(`/sign-in`);
    localStorage.setItem('username','');
    localStorage.setItem('refreshToken','');
    await signOut({refreshToken : refreshToken}).unwrap()
  };
 
  return (
    <div data-testid="signed-in-dropdown" style={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant='h6' style={{marginRight:'10px', marginBottom:'5px'}}>{currentUsername}</Typography> 
      <Button color='inherit' onClick={actionSignOut}>Sign Out</Button>
    </div>
  );
}
