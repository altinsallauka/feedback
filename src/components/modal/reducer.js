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
const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return state;
    case TOGGLE_MODAL_SUCCESS:
      return { ...state, modalIsOpen: action.payload };
    case TOGGLE_MODAL_ERROR:
      return { ...state, modalIsOpen: false };
    default:
      return state;
  }
};

export default ModalReducer;
