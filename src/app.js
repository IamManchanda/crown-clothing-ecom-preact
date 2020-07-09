import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import GlobalStyles from "./global-styles";
import HomePage from "./pages/home-page";
import ShopPage from "./pages/shop-page";
import AuthPage from "./pages/auth-page";
import CheckoutPage from "./pages/checkout-page";
import HeaderNavigation from "./components/header-navigation";
import { auth, createUserProfileDocument } from "./firebase/utils";
import { setCurrentUser } from "./store/user/user.actions";
import { selectCurrentUser } from "./store/user/user.selectors";

class App extends Component {
  componentDidMount() {
    const { props: { setCurrentUser } = {} } = this;
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
    const { props: { currentUser } = {} } = this;
    return (
      <div>
        <GlobalStyles />
        <HeaderNavigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/auth"
            render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
