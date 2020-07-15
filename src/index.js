import App from "./app";
import { h } from "preact";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

import "./assets/scss/global-styles.scss";

const AppWithStore = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

export default AppWithStore;
