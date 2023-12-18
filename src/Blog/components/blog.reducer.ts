import { createAction, createReducer } from "@reduxjs/toolkit";
import IBlog from "../../models/blog.model";
import { initalPostList } from "../../constants/blog";
import { nanoid } from "nanoid";
interface BlogState {
  postList: IBlog[];
  editingPost: IBlog | null;
}
const initialState: BlogState = {
  postList: initalPostList,
  editingPost: null,
};

export const addPost = createAction("blog/addPost", (post: IBlog) => {
  return {
    payload: {
      ...post,
      id: nanoid(),
    },
  };
});
export const deletePost = createAction<string>("blog/deletePost");
export const startEditingPost = createAction<string>("blog/startEditingPost");
export const cancelEditingPost = createAction<string>("blog/cancelEditingPost");
export const finishEditingPost = createAction<string>("blog/finishEditingPost");

const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      const post = action.payload;
      state.postList.push(post);
    })
    .addCase(deletePost, (state, action) => {
      const postId = action.payload;
      const foundPostIndex = state.postList.findIndex(
        (post) => post.id === postId
      );
      if (foundPostIndex !== -1) {
        state.postList.splice(foundPostIndex, 1);
      }
    })
    .addCase(startEditingPost, (state, action) => {
      const postId = action.payload;
      const foundPost = state.postList.find((x) => x.id === postId) || null;
      state.editingPost = foundPost;
    });
});
export default blogReducer;
