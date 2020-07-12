import { takeLatest, put, all, call } from "redux-saga/effects";

import { FETCH_COLLECTIONS_START } from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotsToMap,
} from "../../firebase/utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotsToMap,
      snapshot,
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export default function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
