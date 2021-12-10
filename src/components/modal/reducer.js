import { TOGGLE_MODAL } from "./constants";

const initialState = {
  modalIsOpen: false,
  //   posts: [],
  //   error: null,
  //   isLoading: false,
};
const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, modalIsOpen: action.payload };
    default:
      return state;
  }
};

export default ModalReducer;
