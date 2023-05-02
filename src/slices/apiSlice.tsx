import { createApi } from '@reduxjs/toolkit/query/react'
import { GetBlogResponse} from '../models/blogModel'
import { AddNewUserRequest} from '../models/userModel'
import { SignInRequest,SignInResponse,CreateBlogRequest,AccessTokenRequest } from '../models/userModel'
import { EditBlogRequest,DeleteBlogRequest } from '../models/blogModel'

import {baseQueryWithReauth} from './customBaseQuery'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Blogs'],
  endpoints: builder => ({
  
    getAllBlogs: builder.query<GetBlogResponse[],void>({
      query: () => '/blogs',
      providesTags: ['Blogs']
    }),
    getBlog: builder.query<GetBlogResponse,string | undefined>({
      query: (id) => ({
        url: `/blogs/${id}`,
        providesTags: ['Blogs']
      })
    }),
    createBlog: builder.mutation<void,CreateBlogRequest>({
      query: ({blogHeadline,blogDescription,token}) => ({
        url: '/blogs' ,
        method: 'POST' ,
        body: {blogHeadline,blogDescription},
    }),
    invalidatesTags: ['Blogs']
    }),
    editBlog: builder.mutation<void,EditBlogRequest>({
      query: ({blogHeadline,blogDescription,token,id}) => ({
        url: `/blogs/${id}` ,
        method: 'PATCH' ,
        body: {blogHeadline,blogDescription},
    }),
    invalidatesTags: ['Blogs']
    }),
    deleteBlog: builder.mutation<void,DeleteBlogRequest>({
      query: ({token,id}) => ({
        url: `/blogs/${id}` ,
        method: 'DELETE' ,
        body: {},
    }),
    invalidatesTags: ['Blogs']
    }),
    
    addNewUser: builder.mutation<void,AddNewUserRequest>({
      query: (newUser) => ({
          url: '/auth/sign-up' ,
          method: 'POST' ,
          body: newUser
      }),
    }),
    authUser: builder.mutation<SignInResponse,SignInRequest >({
      query: ({token,username,password}) => ({
          url: '/auth/sign-in' ,
          method: 'POST' ,
          body: {username,password},
      })
    }),
    signOut: builder.mutation<void,AccessTokenRequest>({
      query: (refreshToken)=> ({
        url: `/auth/sign-out`,
        method:'POST',
        body:{refreshToken}
      })
    }),
    // generateAccessToken: builder.mutation<AccessTokenResponse,AccessTokenRequest>({
    //   query: (refreshToken)=> ({
    //     url: `/auth/access-token-renewal`,
    //     method:'POST',
    //     body:{refreshToken}
    //   })
    // })
  })
})

export const { 
  useGetAllBlogsQuery,
  useGetBlogQuery, 
  useAddNewUserMutation, 
  useAuthUserMutation, 
  useCreateBlogMutation,
  useEditBlogMutation,
  useDeleteBlogMutation,
  // useGenerateAccessTokenMutation,
  useSignOutMutation
  } 
  = apiSlice