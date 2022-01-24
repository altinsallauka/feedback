import produce from "immer";
import {
  TOGGLE_MODAL,
  TOGGLE_MODAL_SUCCESS,
  TOGGLE_MODAL_ERROR,
} from "./constants";

const initialState = {
  modalIsOpen: false,
  //   posts: [],
  //   error: null,
  //   isLoading: false,
};
const ModalReducer = (state = initialState, action) => produce(state, draft =>{
  switch (action.type) {
    case TOGGLE_MODAL:
      break;
    case TOGGLE_MODAL_SUCCESS:
      draft.modalIsOpen = action.payload;
      break;
    case TOGGLE_MODAL_ERROR:
      draft.modalIsOpen = false;
      break;
    default:
      // return state;
      break;
  }
});

export default ModalReducer;
