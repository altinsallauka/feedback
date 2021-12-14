import {
  GET_LIST,
  GET_LIST_SUCCESS,
  GET_LIST_ERROR,
  GET_LIST_FAIL,
  POST_FEEDBACK,
  POST_FEEDBACK_SUCCESS,
  POST_FEEDBACK_ERROR,
} from "./constants";

// export const addList = (data) => {
//   dispatch({
//     type: GET_LIST,
//     payload: data,
//   });
// };
// export const getList = () => ({
//   type: GET_LIST,
// });
export const getList = () => {
  return {
    type: GET_LIST,
  };
};
export const getListSuccess = (data) => {
  return {
    type: GET_LIST_SUCCESS,
    payload: data,
  };
};

export const getListFailed = (data) => {
  return {
    type: GET_LIST_FAIL,
    payload: data,
  };
};

export const getListError = (data) => {
  return {
    type: GET_LIST_ERROR,
    payload: {},
  };
};
export const postFeedback = (data) => {
  return { type: POST_FEEDBACK, payload: data };
};
export const postFeedbackSuccess = (data) => {
  return { type: POST_FEEDBACK_SUCCESS, payload: data };
};
export const postFeedbackError = (data) => {
  return { type: POST_FEEDBACK, payload: {} };
};
