import { takeLatest, put, all, call } from "redux-saga/effects";
import { SIGN_OUT_SUCCESS } from "../user/user.types";
import { clearCart } from "./cart.actions";

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* signOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export default function* cartSagas() {
  yield all([call(signOutSuccess)]);
}
