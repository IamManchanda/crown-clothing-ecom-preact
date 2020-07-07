import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root.reducer";

const middlewares = [
  ...(process.env.NODE_ENV === "development" ? [logger] : []),
];
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: "UI Store: Crown Clothing",
      })
    : compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, enhancer);
export const persistor = persistStore(store);
export default { store, persistor };
