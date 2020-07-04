import INITIAL_USER_STATE from "../../constants/initial-user-state";

const userReducer = (state = INITIAL_USER_STATE, { type, payload }) => {
  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
