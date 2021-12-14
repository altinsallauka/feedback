import { call, put, takeLatest } from "redux-saga/effects";
import { TOGGLE_MODAL } from "./constants";
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
