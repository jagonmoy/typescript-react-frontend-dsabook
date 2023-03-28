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
  },
});

export const { blogAdded } = blogsSlice.actions;

export const selectPosts = (state: RootState) => state.blogs.blogs;

export default blogsSlice.reducer;
