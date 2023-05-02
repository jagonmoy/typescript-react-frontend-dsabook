import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'
import { userAuth } from './userSlice'
import { RootState } from "../app/store";

// create a new mutex
const mutex = new Mutex()
const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3010/api',
    mode: "cors",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        return headers;
      }
    },
  });
// const [signOut] = useSignOutMutation();


export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const refreshResult = await baseQuery(
            {
              url: "/auth/access-token-renewal",
              method: "POST",
              body: {refreshToken},
            },
            api,
            extraOptions
          );
        if (refreshResult.data) {
            const {accessToken} : any = refreshResult.data
            api.dispatch(userAuth({
                username: localStorage.getItem('username')?.toString() || '',
                accessToken: accessToken
            }))
          // retry the initial query
          result = await baseQuery(args, api, extraOptions)
        } else {
          api.dispatch(userAuth({
            username: '',
            accessToken: ''
          }))
        }
      } finally {
        // release must be called once the mutex should be released again.
        release()
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}

// import { fetchBaseQuery } from '@reduxjs/toolkit/query'
// import type {
//   BaseQueryFn,
//   FetchArgs,
//   FetchBaseQueryError,
// } from '@reduxjs/toolkit/query'
// import { tokenReceived, loggedOut } from './authSlice'
// import { Mutex } from 'async-mutex'

// // create a new mutex
// const mutex = new Mutex()
// const baseQuery = fetchBaseQuery({ baseUrl: 'https://dsabook.onrender.com/api/' })
// const baseQueryWithReauth: BaseQueryFn<
//   string | FetchArgs,
//   unknown,
//   FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//   // wait until the mutex is available without locking it
//   await mutex.waitForUnlock()
//   let result = await baseQuery(args, api, extraOptions)
//   if (result.error && result.error.status === 401) {
//     // checking whether the mutex is locked
//     if (!mutex.isLocked()) {
//       const release = await mutex.acquire()
//       try {
//         const refreshResult = await baseQuery(
//           '/refreshToken',
//           api,
//           extraOptions
//         )
//         if (refreshResult.data) {
//           api.dispatch(tokenReceived(refreshResult.data))
//           // retry the initial query
//           result = await baseQuery(args, api, extraOptions)
//         } else {
//           api.dispatch(loggedOut())
//         }
//       } finally {
//         // release must be called once the mutex should be released again.
//         release()
//       }
//     } else {
//       // wait until the mutex is available without locking it
//       await mutex.waitForUnlock()
//       result = await baseQuery(args, api, extraOptions)
//     }
//   }
//   return result
// }