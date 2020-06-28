import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import ShopPage from "./pages/shop-page";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
  </div>
);

export default App;
