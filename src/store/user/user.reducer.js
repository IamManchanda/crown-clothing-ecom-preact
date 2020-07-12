import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from "./user.types";
import USER_INITIAL_STATE from "./user.initial-state";

const userReducer = (state = USER_INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
