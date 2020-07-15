import { takeLatest, put, all, call } from "redux-saga/effects";
import supportsWebP from "supports-webp";

import { IS_WEB_P_SUPPORTED_START } from "./browser.types";
import {
  isWebPSupportedSuccess,
  isWebPSupportedFailure,
} from "./browser.actions";

function* isWebPSupportedStartAsync() {
  try {
    if (yield supportsWebP) {
      yield put(isWebPSupportedSuccess());
    } else {
      yield put(isWebPSupportedFailure());
    }
  } catch (error) {
    yield put(isWebPSupportedFailure());
  }
}

function* isWebPSupportedStart() {
  yield takeLatest(IS_WEB_P_SUPPORTED_START, isWebPSupportedStartAsync);
}

export default function* browserSagas() {
  yield all([call(isWebPSupportedStart)]);
}
