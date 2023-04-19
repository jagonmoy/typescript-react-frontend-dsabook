import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
import { UserState} from '../models/userModel';

const initialState: UserState = { 
  username : '',
  accessToken: ''
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userAuth(state, action: PayloadAction<UserState>) {
      const {username,accessToken} = action.payload;
      state.username = username ;
      state.accessToken = accessToken ;
    }
  },
});

export const {userAuth} = usersSlice.actions;

export const selectUsername = (state: RootState) => state.user.username
export const selectUserToken = (state: RootState) => state.user.accessToken
export const selectUser = (state: RootState) => state.user

export default usersSlice.reducer;
