import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  CLEAR_ITEM_FROM_CART,
} from "./cart.types";

export const toggleCartHidden = () => ({ type: TOGGLE_CART_HIDDEN });

export const addCartItem = (item) => ({
  type: ADD_CART_ITEM,
  payload: item,
});

export const removeCartItem = (item) => ({
  type: REMOVE_CART_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
});
