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

export const addComment = (comment, id) => {
  return {
    type: ActionTypes.ADD_COMMENT,
    payload: { comment: comment, id: id },
  };
};

export const addLike = (like, id) => {
  return {
    type: ActionTypes.ADD_LIKE,
    payload: { like, id },
  };
};
