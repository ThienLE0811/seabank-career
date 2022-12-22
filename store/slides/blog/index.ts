import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPosts } from './action';
import type { BlogState, TResponseFetch } from './blog';

const initialState: BlogState = {
  blogs: [],
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setSelectedRowId: (state, action: PayloadAction<string[]>) => {},
  },
  extraReducers: {
    [fetchPosts.fulfilled.type]: (
      state,
      action: PayloadAction<TResponseFetch>,
    ) => {},
  },
});

const { actions, reducer } = blogSlice;
export const { setSelectedRowId } = actions;
export default reducer;
