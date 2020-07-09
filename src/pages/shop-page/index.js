import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import ShopPageCollection from "./_collection";
import CollectionsOverview from "../../components/collections-overview";

const ShopPage = ({ match }) => (
  <Fragment>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collection`} component={ShopPageCollection} />
  </Fragment>
);

export default ShopPage;
