import { ADD_LIST, POST_FEEDBACK } from "./constants";

const initialState = {
  samples: [],
  feedback: [],
  //   posts: [],
  //   error: null,
  //   isLoading: false,
};
const FeedbackFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return { ...state, samples: action.payload };
    case POST_FEEDBACK:
      return { ...state, feedback: action.payload };
    default:
      return state;
  }
};

export default FeedbackFormReducer;
