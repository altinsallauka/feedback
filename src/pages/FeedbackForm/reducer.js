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
const FeedbackFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      return state;
    case GET_LIST_SUCCESS:
      return { ...state, samples: action.payload, isLoading: false };
    case GET_LIST_ERROR:
      return { ...state, samples: {}, error: "Something went wrong" };
    case POST_FEEDBACK:
      return state;
    case POST_FEEDBACK_SUCCESS:
      return { ...state, feedback: action.payload, isLoading: false };
    case POST_FEEDBACK_ERROR:
      return { ...state, feedback: {}, error: "Something went wrong" };
    default:
      return state;
  }
};

export default FeedbackFormReducer;
