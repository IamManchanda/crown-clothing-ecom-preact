import React, { Fragment, Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../store/shop/shop.actions";
import CollectionsOverviewWithContainer from "../components/collections-overview/with-container";
import CollectionPageWithContainer from "../components/collection-page/with-container";

class ShopPage extends Component {
  componentDidMount() {
    const { props: { fetchCollectionsStart } = {} } = this;
    fetchCollectionsStart();
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
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
