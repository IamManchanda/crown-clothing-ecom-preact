import { TOGGLE_CART_HIDDEN } from "./cart.types";
import INITIAL_CART_STATE from "../../constants/initial-cart-state";

const cartReducer = (state = INITIAL_CART_STATE, { type }) => {
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default cartReducer;
