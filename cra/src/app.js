import React, { Fragment, useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HeaderNavigation from "./components/header-navigation";
import { selectCurrentUser } from "./store/user/user.selectors";
import { checkUserSession } from "./store/user/user.actions";
import { SpinnerOverlayStyled, SpinnerStyled } from "./components/with-spinner";
import ErrorBoundary from "./components/error-boundary";

const HomePage = lazy(() => import("./pages/index"));
const ShopPage = lazy(() => import("./pages/shop"));
const AuthPage = lazy(() => import("./pages/auth"));
const CheckoutPage = lazy(() => import("./pages/checkout"));

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <Fragment>
      <HeaderNavigation />
      <Switch>
        <ErrorBoundary>
          <Suspense
            fallback={
              <SpinnerOverlayStyled>
                <SpinnerStyled />
              </SpinnerOverlayStyled>
            }
          >
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/auth"
              render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
