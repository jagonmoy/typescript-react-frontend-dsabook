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
