import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: []
  },
  reducers: { 
    addPost: (state, action) => {
      state.posts.push({
        id: Date.now(),
        content: action.payload.content,
        title: action.payload.title
      });
    },

    deletePost: (state, action) => {    
      state.posts = state.posts.filter(post => post.id !== action.payload);
    }
  }
});


export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;