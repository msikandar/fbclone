import { ActionTypes } from "../constants/action-types";

export const addStory = (story) => {
  return {
    type: ActionTypes.ADD_STORY,
    payload: story,
  };
};

export const addPost = (post) => {
  return {
    type: ActionTypes.ADD_POST,
    payload: post,
  };
};

export const add = () => {
  return {
    type: ActionTypes.add,
    payload: {},
  };
};
