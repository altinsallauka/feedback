import { combineReducers } from "redux";
import FeedbackFormReducer from "../pages/FeedbackForm/reducer";
import ModalReducer from "./../components/modal/reducer";
const rootReducer = combineReducers({
  FeedbackFormReducer: FeedbackFormReducer,
  ModalReducer: ModalReducer,
});
export default rootReducer;
