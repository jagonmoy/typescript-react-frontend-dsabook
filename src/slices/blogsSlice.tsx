import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
// import {blogs} from '../data/blogs';
import { BlogInterface,BlogsStateInterface } from '../models/blogModel';

const initialState: BlogsStateInterface = {
  blogs : [],
};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    blogAdded : {
    reducer(state, action: PayloadAction<BlogInterface>) {
      state.blogs.push(action.payload);
    },
    prepare(blogHeadline : string, blogDescription : string, author: string) {
      return {
          payload: {
              id : nanoid(),
              blogHeadline,
              blogDescription,
              author
          }
      }
    }
    },
    blogEdited(state,action: PayloadAction<BlogInterface>) {
      const {id,blogHeadline,blogDescription} = action.payload;
      const existingBlog = state.blogs[state.blogs.findIndex(blog=>blog.id === id)];
      if(existingBlog) {
         existingBlog.blogHeadline = blogHeadline;
         existingBlog.blogDescription = blogDescription;
      }
    },
    blogDeleted(state,action: PayloadAction<BlogInterface>) {
        console.log(action.payload);
        let index = state.blogs.findIndex(obj => obj.id === action.payload.id);
        state.blogs.splice(index,1)
    }
  },
});

export const { blogAdded, blogEdited, blogDeleted } = blogsSlice.actions;

export const selectPosts = (state: RootState) => state.blogs.blogs;

export default blogsSlice.reducer;
