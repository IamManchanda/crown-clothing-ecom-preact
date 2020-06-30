import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./app.scss";
import HomePage from "./pages/home-page";
import ShopPage from "./pages/shop-page";
import ContactPage from "./pages/contact-page";
import AuthPage from "./pages/auth-page";
import HeaderNavigation from "./components/header-navigation";
import { auth, createUserProfileDocument } from "./firebase/utils";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { state: { currentUser } = {} } = this;
    return (
      <div className="app">
        <HeaderNavigation currentUser={currentUser} />
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
