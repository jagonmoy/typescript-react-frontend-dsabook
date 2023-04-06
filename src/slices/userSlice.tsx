import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
import { UserInterface} from '../models/userModel';

const initialState: UserInterface = { 
  username : '',
  status : false
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userAuth(state, action: PayloadAction<UserInterface>) {
      const {username,status} = action.payload;
      state.username = username ;
      state.status = status
    }
  },
});

export const {userAuth} = usersSlice.actions;

export const selectUsername = (state: RootState) => state.user.username
export const selectUserStatus = (state: RootState) => state.user.status
export const selectUser = (state: RootState) => state.user

export default usersSlice.reducer;
