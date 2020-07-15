import { takeLatest, put, all, call } from "redux-saga/effects";
import { FETCH_SECTIONS_START } from "./directory.types";
import { fetchSectionsSuccess } from "./directory.actions";
import DIRECTORY_SECTIONS_DATA from "../../fixtures/directory-sections.data";

function* fetchSectionsStartFixtures() {
  yield put(fetchSectionsSuccess(DIRECTORY_SECTIONS_DATA));
}

function* fetchSectionsStart() {
  yield takeLatest(FETCH_SECTIONS_START, fetchSectionsStartFixtures);
}

export default function* directorySagas() {
  yield all([call(fetchSectionsStart)]);
}
