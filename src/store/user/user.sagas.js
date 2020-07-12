import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/utils";
import { GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START } from "./user.types";
import {
  googleSignInSuccess,
  googleSignInFailure,
  emailSignInSuccess,
  emailSignInFailure,
} from "./user.actions";

export function* googleSignInStartAsync() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      }),
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* googleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, googleSignInStartAsync);
}

export function* emailSignInStartAsync({ payload: { email, password } = {} }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      emailSignInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      }),
    );
  } catch (error) {
    yield put(emailSignInFailure(error));
  }
}

export function* emailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, emailSignInStartAsync);
}

export default function* userSagas() {
  yield all([call(googleSignInStart), call(emailSignInStart)]);
}
