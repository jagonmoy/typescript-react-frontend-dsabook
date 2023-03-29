import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from '../slices/blogsSlice'
import usersReducer from  '../slices/usersSlice'

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    users: usersReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch