import { SET_CURRENT_USER } from "./user.types";
import USER_INITIAL_STATE from "./user.initial-state";

const userReducer = (state = USER_INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};

export default userReducer;
