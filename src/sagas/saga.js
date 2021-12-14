import { all, fork } from "redux-saga/effects";
import feedbackSaga from "../pages/FeedbackForm/saga";

export default function* rootSaga() {
  yield all([feedbackSaga()]);
}
