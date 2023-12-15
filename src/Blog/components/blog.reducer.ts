import {createReducer} from "@reduxjs/toolkit"
import IBlog from "../../models/blog.model"
interface BlogState {
  postList: IBlog[];

}
const initialState: BlogState = {
  postList: []
}
const blogReducer = createReducer(initialState, builder => {

})
export default blogReducer