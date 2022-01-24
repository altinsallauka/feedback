import produce from "immer";
import {
  GET_LIST,
  GET_LIST_SUCCESS,
  GET_LIST_ERROR,
  POST_FEEDBACK,
  POST_FEEDBACK_SUCCESS,
  POST_FEEDBACK_ERROR,
} from "./constants";

const initialState = {
  samples: [],
  feedback: [],
  //   posts: [],
  error: null,
  isLoading: false,
};
const FeedbackFormReducer = (state = initialState, action) => 
  produce(state, draft => {
  switch (action.type) {
    case GET_LIST:
      // return draft;
      break;
    case GET_LIST_SUCCESS:
      // return { ...state, samples: action.payload, isLoading: false };
      draft.samples = null;
      draft.samples = action.payload;
      draft.isLoading = false;
      break;
    case GET_LIST_ERROR:
      // return { ...state, samples: {}, error: "Something went wrong" };
      draft.samples = null;
      draft.error = "GET_LIST_ERROR";
      break;
    case POST_FEEDBACK:
      // return state;
      break;
    case POST_FEEDBACK_SUCCESS:
      draft.feedback = null;
      draft.feedback = action.payload;
      draft.isLoading = false;
      break;
    case POST_FEEDBACK_ERROR:
      draft.feedback = null;
      draft.error = "POST_FEEDBACK_ERROR";
      break
    default:
      break;
  }
})

export default FeedbackFormReducer;
