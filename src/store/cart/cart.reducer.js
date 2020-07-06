import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
} from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";
import INITIAL_CART_STATE from "../../constants/initial-cart-state";

const cartReducer = (state = INITIAL_CART_STATE, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== payload.id,
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
