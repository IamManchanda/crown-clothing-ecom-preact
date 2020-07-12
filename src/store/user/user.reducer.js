import {
  /* SET_CURRENT_USER, */
  GOOGLE_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_FAILURE,
} from "./user.types";
import USER_INITIAL_STATE from "./user.initial-state";

const userReducer = (state = USER_INITIAL_STATE, { type, payload }) => {
  switch (type) {
    /* case SET_CURRENT_USER: */
    case GOOGLE_SIGN_IN_SUCCESS:
    case EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
      };
    case GOOGLE_SIGN_IN_FAILURE:
    case EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
