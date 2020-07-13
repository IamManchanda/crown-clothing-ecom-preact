import React, { Fragment, useEffect, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../store/shop/shop.actions";
import {
  SpinnerOverlayStyled,
  SpinnerStyled,
} from "../components/with-spinner";

const CollectionsOverviewWithContainer = lazy(() =>
  import("../components/collections-overview/with-container"),
);
const CollectionPageWithContainer = lazy(() =>
  import("../components/collection-page/with-container"),
);

const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <Fragment>
      <Switch>
        <Suspense
          fallback={
            <SpinnerOverlayStyled>
              <SpinnerStyled />
            </SpinnerOverlayStyled>
          }
        >
          <Route
            exact
            path={`${match.path}`}
            component={CollectionsOverviewWithContainer}
          />
          <Route
            path={`${match.path}/:collection`}
            component={CollectionPageWithContainer}
          />
        </Suspense>
      </Switch>
    </Fragment>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
