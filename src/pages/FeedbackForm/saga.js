import { call, put, takeLatest } from "redux-saga/effects";
import { GET_LIST, POST_FEEDBACK } from "./constants";
import feedbackService from "../../services/feedback.service";
import {
  getListSuccess,
  getListError,
  postFeedbackSuccess,
  postFeedbackError,
} from "./actions";
export function* fetchSamples() {
  try {
    const response = yield call(feedbackService.fetchOptions);
    yield put(getListSuccess(response.samples));
  } catch (e) {
    yield put(getListError());
  }
}
export function* postSample(data) {
  const feedback = data;
  // yield console.log(feedback);
  try {
    yield put(postFeedbackSuccess(feedback.payload));
  } catch (e) {
    yield put(postFeedbackError());
  }
}

export default function* feedbackSaga() {
  yield takeLatest(GET_LIST, fetchSamples);
  yield takeLatest(POST_FEEDBACK, postSample);
}
