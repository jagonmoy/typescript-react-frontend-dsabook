import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BlogAPI} from '../models/blogModel'
import { NewUser, AuthUser } from '../models/userModel'


interface SignInRequest {
  token : string,
  userbody: AuthUser
}
interface SignInResponse {
  accessToken: string,
  refreshToken: string,
}
interface CreateBlogRequest {
  token: string,
  blogHeadline: string,
  blogDescription: string
}
interface EditBlogRequest {
  id: string | undefined,
  blogHeadline: string | undefined,
  blogDescription: string | undefined,
  token: string
}
interface DeleteBlogRequest {
  id: string | undefined
  token: string
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://0.0.0.0:3010/api' }),
  tagTypes: ['Blogs','Blog'],
  endpoints: builder => ({
  
    getAllBlogs: builder.query<BlogAPI[],void>({
      query: () => '/blogs',
      providesTags: ['Blogs']
    }),
    getBlog: builder.query<BlogAPI,string | undefined>({
      query: (id : string) => `/blogs/${id}`,
      providesTags: ['Blog']
    }),
    addNewUser: builder.mutation<unknown,NewUser>({
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
    invalidatesTags: ['Blog','Blogs']
    }),
    deleteBlog: builder.mutation<void,DeleteBlogRequest>({
      query: ({token,id}) => ({
        url: `/blogs/${id}` ,
        method: 'DELETE' ,
        body: {},
        headers: {Authorization : `Bearer ${token}`},
    }),
    invalidatesTags: ['Blog','Blogs']
    }),
  }),
  
})

export const { 
  useGetAllBlogsQuery,
  useGetBlogQuery, 
  useAddNewUserMutation, 
  useAuthUserMutation, 
  useCreateBlogMutation,
  useEditBlogMutation,
  useDeleteBlogMutation } 
  = apiSlice