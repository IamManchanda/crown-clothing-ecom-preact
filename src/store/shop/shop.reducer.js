import SHOP_INITIAL_STATE from "./shop.initial-state";
import { UPDATE_COLLECTIONS } from "./shop.types";

const shopReducer = (state = SHOP_INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
