import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
// import {blogs} from '../data/blogs';
import { UserInterface,UserAuthInterface,UserStateInterface} from '../models/userModel';

const initialState: UserStateInterface = { 
  users : [],
  auth: {
    currentUser : '',
    status : false
  }
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded(state, action: PayloadAction<UserInterface>) {
      const user = action.payload;
      state.users.push(user)
    },
    userAuth(state, action: PayloadAction<UserAuthInterface>) {
      const {currentUser,status} = action.payload;
      state.auth.currentUser = currentUser ;
      state.auth.status = status
    }
  },
});

export const {userAdded,userAuth} = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
