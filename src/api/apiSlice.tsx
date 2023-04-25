import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetBlogResponse} from '../models/blogModel'
import { AddNewUserRequest} from '../models/userModel'
import { SignInRequest,SignInResponse,CreateBlogRequest,AccessTokenRequest,AccessTokenResponse } from '../models/userModel'
import { EditBlogRequest,DeleteBlogRequest } from '../models/blogModel'


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3010/api` }),
  tagTypes: ['Blogs'],
  endpoints: builder => ({
  
    getAllBlogs: builder.query<GetBlogResponse[],void>({
      query: () => '/blogs',
      providesTags: ['Blogs']
    }),
    getBlog: builder.query<GetBlogResponse,string | undefined>({
      query: (id) => `/blogs/${id}`,
    }),
   
    addNewUser: builder.mutation<void,AddNewUserRequest>({
      query: (newUser) => ({
          url: '/auth/sign-up' ,
          method: 'POST' ,
          body: newUser
      }),
    }),
    authUser: builder.mutation<SignInResponse,SignInRequest >({
      query: ({token,userbody}) => ({
          url: '/auth/sign-in' ,
          method: 'POST' ,
          body: userbody,
          prepareHeaders: (headers: { set: (arg0: string, arg1: string) => void }) => {
            headers.set('Authorization',`Bearer ${token}`)
          }
      })
    }),
    createBlog: builder.mutation<void,CreateBlogRequest>({
      query: ({blogHeadline,blogDescription,token}) => ({
        url: '/blogs' ,
        method: 'POST' ,
        body: {blogHeadline,blogDescription},
        headers: {Authorization : `Bearer ${token}`},
    }),
    invalidatesTags: ['Blogs']
    }),
    editBlog: builder.mutation<void,EditBlogRequest>({
      query: ({blogHeadline,blogDescription,token,id}) => ({
        url: `/blogs/${id}` ,
        method: 'PATCH' ,
        body: {blogHeadline,blogDescription},
        headers: {Authorization : `Bearer ${token}`},
    }),
    invalidatesTags: ['Blogs']
    }),
    deleteBlog: builder.mutation<void,DeleteBlogRequest>({
      query: ({token,id}) => ({
        url: `/blogs/${id}` ,
        method: 'DELETE' ,
        body: {},
        headers: {Authorization : `Bearer ${token}`},
    }),
    invalidatesTags: ['Blogs']
    }),
    generateAccessToken: builder.mutation<AccessTokenResponse,AccessTokenRequest>({
      query: (refreshToken)=> ({
        url: `/auth/access-token-renewal`,
        method:'POST',
        body:{refreshToken}
      })
    }),
    signOut: builder.mutation<void,AccessTokenRequest>({
      query: (refreshToken)=> ({
        url: `/auth/sign-out`,
        method:'POST',
        body:{refreshToken}
      })
    })
  }),
  
})

export const { 
  useGetAllBlogsQuery,
  useGetBlogQuery, 
  useAddNewUserMutation, 
  useAuthUserMutation, 
  useCreateBlogMutation,
  useEditBlogMutation,
  useDeleteBlogMutation,
  useGenerateAccessTokenMutation,
  useSignOutMutation
  } 
  = apiSlice