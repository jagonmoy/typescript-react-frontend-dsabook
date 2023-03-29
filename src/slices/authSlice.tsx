import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
// import {blogs} from '../data/blogs';
import { userInterface} from '../models/userModel';

interface usersInterface {
  users :userInterface[];
}

const initialState: usersInterface = {
  users : [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded(state, action: PayloadAction<userInterface>) {
      state.users.push(action.payload);
    },
  },
});

export const {userAdded} = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users.users;

export default usersSlice.reducer;
