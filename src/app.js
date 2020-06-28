import React from "react";
import { Switch, Route } from "react-router-dom";

import "./app.scss";
import HomePage from "./pages/home-page";
import ShopPage from "./pages/shop-page";
import ContactPage from "./pages/contact-page";
import AuthPage from "./pages/auth-page";
import HeaderNavigation from "./components/header-navigation";

const App = () => (
  <div className="app">
    <HeaderNavigation />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/auth" component={AuthPage} />
    </Switch>
  </div>
);

export default App;
