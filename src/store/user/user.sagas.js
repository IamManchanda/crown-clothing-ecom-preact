import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/utils";
import {
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from "./user.types";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from "./user.actions";

function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData,
    );
    const userSnapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      }),
    );
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* emailSignInStartAsync({ payload: { email, password } = {} }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* emailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, emailSignInStartAsync);
}

function* checkUserSessionAsync() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* checkUserSession() {
  yield takeLatest(CHECK_USER_SESSION, checkUserSessionAsync);
}

function* signOutStartAsync() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure());
  }
}

function* signOutStart() {
  yield takeLatest(SIGN_OUT_START, signOutStartAsync);
}

function* signUpStartAsync({ payload: { email, password, displayName } = {} }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(
      signUpSuccess({
        user,
        additionalData: {
          displayName,
        },
      }),
    );
  } catch (error) {
    yield put(signUpFailure());
  }
}

function* signUpStart() {
  yield takeLatest(SIGN_UP_START, signUpStartAsync);
}

function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

function* afterSignUpSuccess() {
  yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp);
}

export default function* userSagas() {
  yield all([
    call(emailSignInStart),
    call(checkUserSession),
    call(signOutStart),
    call(signUpStart),
    call(afterSignUpSuccess),
  ]);
}
