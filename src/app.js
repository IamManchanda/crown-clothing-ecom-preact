import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./app.scss";
import HomePage from "./pages/home-page";
import ShopPage from "./pages/shop-page";
import ContactPage from "./pages/contact-page";
import AuthPage from "./pages/auth-page";
import HeaderNavigation from "./components/header-navigation";
import { auth } from "./firebase/utils";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
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
  }
}

export default App;
