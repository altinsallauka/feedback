import { call, put, takeLatest } from "redux-saga/effects";
import { LIST_RECEIVED, GET_LIST } from "./constants";
import { samples } from "../../utils/samples.json";
import feedbackService from "../../services/feedback.service";
import { getListSuccess, getListFailed, getListError } from "./actions";
export function* fetchSamples() {
  try {
    const response = yield call(feedbackService.fetchOptions);
    yield put(getListSuccess(response.samples));
  } catch (e) {
    yield put(getListError());
  }
}

export default function* feedbackSaga() {
  yield takeLatest(GET_LIST, fetchSamples);
}
