// import { all } from "redux-saga/effects";
import { all, fork } from "redux-saga/effects";
import feedbackSaga from "../pages/FeedbackForm/saga";
import modalSaga from "../components/modal/saga";
export default function* rootSaga() {
  yield all([fork(feedbackSaga), fork(modalSaga)]);
}
