import { h } from "preact";
import Helmet from "preact-helmet";
import { useEffect } from "preact/hooks";
import { Router } from "preact-router";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HeaderNavigation from "./components/header-navigation";
import Redirect from "./components/redirect";
import { selectCurrentUser } from "./store/user/user.selectors";
import { checkUserSession } from "./store/user/user.actions";
import { isWebPSupportedStart } from "./store/browser/browser.actions";

// Code-splitting is automated for routes
import HomePage from "./routes/home";
import ShopPage from "./routes/shop";
import AuthPage from "./routes/auth";
import CheckoutPage from "./routes/checkout";

const App = ({ currentUser, checkUserSession, isWebPSupportedStart }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  useEffect(() => {
    isWebPSupportedStart();
  }, [isWebPSupportedStart]);

  return (
    <div id="app">
      <Helmet
        htmlAttributes={{ lang: "en", amp: undefined }} // amp takes no value
        titleTemplate="%s | Crown Clothing"
        defaultTitle="Crown Clothing"
        titleAttributes={{ itemprop: "name", lang: "en" }}
        meta={[
          {
            name: "description",
            content:
              "Shop Men's & Women's Clothing, Hats, Sneakers and Jackets at Crown Clothing",
          },
          {
            "http-equiv": "x-dns-prefetch-control",
            content: "on",
          },
        ]}
        link={[
          {
            rel: "stylesheet",
            href:
              "https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap",
          },
          {
            rel: "dns-prefetch",
            href: "https://fonts.googleapis.com",
          },
          {
            rel: "dns-prefetch",
            href: "https://firestore.googleapis.com",
          },
          {
            rel: "dns-prefetch",
            href: "https://firebasestorage.googleapis.com",
          },
        ]}
      />
      <HeaderNavigation />
      <Router>
        <HomePage path="/" />
        <ShopPage path="/shop/" />
        <ShopPage path="/shop/:collectionId" />
        {currentUser ? (
          <Redirect path="/auth" to="/" />
        ) : (
          <AuthPage path="/auth" />
        )}
        <CheckoutPage path="/checkout" />
      </Router>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
  isWebPSupportedStart: () => dispatch(isWebPSupportedStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
