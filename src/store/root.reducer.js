import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import browserReducer from "./browser/browser.reducer";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  browser: browserReducer,
  directory: directoryReducer,
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
});
export default persistReducer(persistConfig, rootReducer);
