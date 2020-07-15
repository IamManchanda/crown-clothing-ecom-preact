import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root.reducer";
import rootSaga from "./root.saga";
import USER_INITIAL_STATE from "./user/user.initial-state";
import BROWSER_INITIAL_STATE from "./browser/browser.initial-state";
import DIRECTORY_INITIAL_STATE from "./directory/directory.initial-state";
import SHOP_INITIAL_STATE from "./shop/shop.initial-state";
import CART_INITIAL_STATE from "./cart/cart.initial-state";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  sagaMiddleware,
  ...(process.env.NODE_ENV === "development" ? [logger] : []),
];

const composeEnhancers =
  process.env.NODE_ENV === "development" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: "Redux Store: Crown Clothing",
      })
    : compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const initialState = {
  user: USER_INITIAL_STATE,
  browser: BROWSER_INITIAL_STATE,
  directory: DIRECTORY_INITIAL_STATE,
  shop: SHOP_INITIAL_STATE,
  cart: CART_INITIAL_STATE,
};

export const store = createStore(rootReducer, initialState, enhancer);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);

export default { store, persistor };
