import { TOGGLE_MODAL } from "./constants";

export const toggleModal = (value) => async (dispatch) => {
  dispatch({
    type: TOGGLE_MODAL,
    payload: value,
  });
};
