import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",

  initialState: {
    posts: [],
    loading: false,
  },

  reducers: {
    //can be used for all services(load zyada padhta hai matt use karna)
    setPosts: (state, action) => {
      state.posts = action.payload;
    },

    addPost: (state, action) => {
      state.posts.push(action.payload);
    },

    updatePost: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.posts.findIndex((post) => post.$id === id);

      if (index !== -1) {
        state.posts[index] = { ...state.posts[index], ...updatedData };
      }
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter(
        (post) => post.$id !== action.payload
      );
    },
  },
});

export const { setPosts, addPost, updatePost, deletePost } =
  postSlice.actions;

export default postSlice.reducer;
