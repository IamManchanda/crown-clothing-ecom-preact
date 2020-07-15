import DIRECTORY_INITIAL_STATE from "./directory.initial-state";
import {
  FETCH_SECTIONS_START,
  FETCH_SECTIONS_SUCCESS,
} from "./directory.types";

const directoryReducer = (
  state = DIRECTORY_INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case FETCH_SECTIONS_START:
      return state;
    case FETCH_SECTIONS_SUCCESS:
      return {
        ...state,
        sections: payload,
      };
    default:
      return state;
  }
};

export default directoryReducer;
