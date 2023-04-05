import { configureStore,combineReducers,PreloadedState } from '@reduxjs/toolkit'
import blogsReducer from '../slices/blogsSlice'
import userReducer from  '../slices/userSlice'

const rootReducer = combineReducers({
  user: userReducer,
  blogs: blogsReducer
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']