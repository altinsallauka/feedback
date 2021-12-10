import { ADD_LIST, POST_FEEDBACK } from "./constants";

export const addList = (data) => async (dispatch) => {
  dispatch({
    type: ADD_LIST,
    payload: data,
  });
};
export const postFeedback = (data) => async (dispatch) => {
  dispatch({ type: POST_FEEDBACK, payload: data });
};
