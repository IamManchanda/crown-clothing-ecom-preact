import React, { Fragment, Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../store/shop/shop.actions";
import CollectionsOverviewWithContainer from "../components/collections-overview/with-container";
import CollectionPageWithContainer from "../components/collection-page/with-container";

class ShopPage extends Component {
  componentDidMount() {
    const { props: { fetchCollectionsStartAsync } = {} } = this;
    fetchCollectionsStartAsync();
  }

  render() {
    const { props: { match } = {} } = this;
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
  }
}

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
