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

// Code-splitting is automated for routes
import Home from "./routes/home";
import Auth from "./routes/auth";
import Checkout from "./routes/checkout";
import Shop from "./routes/shop";

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div id="app">
      <Helmet
        htmlAttributes={{ lang: "en", amp: undefined }} // amp takes no value
        title="Crown Clothing"
        titleAttributes={{ itemprop: "name", lang: "en" }}
        meta={[
          {
            name: "description",
            content:
              "Shop Men's & Women's Clothing, Hats, Sneakers and Jackets at Crown Clothing",
          },
        ]}
        link={[
          {
            rel: "stylesheet",
            href:
              "https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap",
          },
        ]}
      />
      <HeaderNavigation />
      <Router>
        <Home path="/" />
        {currentUser ? <Redirect path="/auth" to="/" /> : <Auth path="/auth" />}
        <Checkout path="/checkout" />
        <Shop path="/shop/" />
        <Shop path="/shop/:collectionId" />
      </Router>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
