import {
  FETCH_SECTIONS_START,
  FETCH_SECTIONS_SUCCESS,
} from "./directory.types";

export const fetchSectionsStart = () => ({
  type: FETCH_SECTIONS_START,
});

export const fetchSectionsSuccess = (data) => ({
  type: FETCH_SECTIONS_SUCCESS,
  payload: data,
});
