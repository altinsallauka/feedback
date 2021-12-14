import { call, put, takeLatest } from "redux-saga/effects";
import {
  TOGGLE_MODAL,
  TOGGLE_MODAL_SUCCESS,
  TOGGLE_MODAL_ERROR,
} from "./constants";
import feedbackService from "../../services/feedback.service";
import { toggleModalSuccess, toggleModalError } from "./actions";

export function* toggler(data) {
  try {
    yield put(toggleModalSuccess(data.payload));
  } catch (e) {
    yield put(toggleModalError());
  }
}
export default function* modalSaga() {
  yield takeLatest(TOGGLE_MODAL, toggler);
}
