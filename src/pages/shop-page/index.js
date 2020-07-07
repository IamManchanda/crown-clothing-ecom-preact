import React from "react";
import { Route } from "react-router-dom";

import "./styles.scss";
import ShopPageCollection from "./_collection";
import CollectionsOverview from "../../components/collections-overview";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collection`} component={ShopPageCollection} />
  </div>
);

export default ShopPage;
