import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
// import {blogs} from '../data/blogs';
import {authInterface} from '../models/authModel';


const initialState: authInterface = {
  signedState: false,
  username: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signedIn(state, action: PayloadAction<authInterface>) {
      const {username,signedState} = action.payload;
      state.username = username ;
      state.signedState = signedState;
    },
  },
});

export const {signedIn} = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
