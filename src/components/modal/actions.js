import {
  TOGGLE_MODAL,
  TOGGLE_MODAL_SUCCESS,
  TOGGLE_MODAL_ERROR,
} from "./constants";

// export const toggleModal = (value) => async (dispatch) => {
//   dispatch({
//     type: TOGGLE_MODAL,
//     payload: value,
//   });
// };

export const toggleModal = (data) => {
  return { type: TOGGLE_MODAL, payload: data };
};
export const toggleModalSuccess = (data) => {
  return { type: TOGGLE_MODAL_SUCCESS, payload: data };
};
export const toggleModalError = (data) => {
  return { type: TOGGLE_MODAL_ERROR, payload: {} };
};
