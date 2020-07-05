import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./app.scss";
import HomePage from "./pages/home-page";
import ShopPage from "./pages/shop-page";
import ContactPage from "./pages/contact-page";
import AuthPage from "./pages/auth-page";
import HeaderNavigation from "./components/header-navigation";
import { auth, createUserProfileDocument } from "./firebase/utils";
import { setCurrentUser } from "./store/user/user.actions";

class App extends Component {
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
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

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
