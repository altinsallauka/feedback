import {
  GET_LIST,
  GET_LIST_SUCCESS,
  GET_LIST_ERROR,
  LIST_RECEIVED,
  POST_FEEDBACK,
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
    // draft.upcomingBirthdays = action.payload.upcomingBirthdays;
    // toast.success('Ditlindjet u moren me sukses!');
    // break;
    case GET_LIST_ERROR:
      // toast.error("Diçka shkoi gabim!");
      return { ...state, samples: {}, error: "Something went wrong" };
    // draft.upcomingBirthdays = {};
    // draft.upcomingBirthdays.birthdays = [];
    // break;
    // case GET_LIST:
    //   return { ...state, isLoading: true };
    // case LIST_RECEIVED:
    //   return { ...state, samples: action.payload, isLoading: false };
    case POST_FEEDBACK:
      return { ...state, feedback: action.payload };
    default:
      return state;
  }
};

export default FeedbackFormReducer;
