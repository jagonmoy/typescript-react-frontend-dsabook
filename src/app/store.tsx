import { configureStore,combineReducers,PreloadedState } from '@reduxjs/toolkit'
import userReducer from  '../slices/userSlice'
import { apiSlice } from '../api/apiSlice'

const rootReducer : any = combineReducers({
  user: userReducer,
  [apiSlice.reducerPath]: apiSlice.reducer
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']