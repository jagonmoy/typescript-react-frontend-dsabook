import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from '../slices/blogsSlice'
import usersReducer from  '../slices/usersSlice'
import authReducer from '../slices/authSlice'

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    users: usersReducer,
    auth: authReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch