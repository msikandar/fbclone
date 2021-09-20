import { combineReducers } from "redux";
import { postReducer, storyReducer } from "./appReducer";

const reducers = combineReducers({
  storyData: storyReducer,
  postData: postReducer,
});

export default reducers;
