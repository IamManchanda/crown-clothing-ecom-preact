import React, { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../store/shop/shop.actions";
import CollectionsOverviewWithContainer from "../components/collections-overview/with-container";
import CollectionPageWithContainer from "../components/collection-page/with-container";

const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <Fragment>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewWithContainer}
      />
      <Route
        path={`${match.path}/:collection`}
        component={CollectionPageWithContainer}
      />
    </Fragment>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
