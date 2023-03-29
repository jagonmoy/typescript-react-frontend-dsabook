import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
import blogs from '../data/blogs.json';
import { BlogInterface } from '../models/blogModel';

interface BlogsInterface {
  blogs: BlogInterface[];
}

const initialState: BlogsInterface = {
  blogs : blogs,
};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    blogAdded(state, action: PayloadAction<BlogInterface>) {
      state.blogs.push(action.payload);
    },
    blogEdited(state,action: PayloadAction<BlogInterface>) {
      const {id,blogHeadline,blogDescription} = action.payload;
      const existingBlog = state.blogs[Number(id)];
      if(existingBlog) {
         existingBlog.blogHeadline = blogHeadline;
         existingBlog.blogDescription = blogDescription;
      }
    }
  },
});

export const { blogAdded, blogEdited } = blogsSlice.actions;

export const selectPosts = (state: RootState) => state.blogs.blogs;

export default blogsSlice.reducer;
