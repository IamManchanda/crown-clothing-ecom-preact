import React, { Fragment, Component } from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../store/shop/shop.actions";
import { selectShopCollectionsIsLoaded } from "../../store/shop/shop.selectors";
import withSpinner from "../../components/with-spinner";
import CollectionsOverviewWithContainer from "../../components/collections-overview/with-container";
import CollectionPage from "../../components/collection-page";

const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends Component {
  componentDidMount() {
    const { props: { fetchCollectionsStartAsync } = {} } = this;
    fetchCollectionsStartAsync();
  }

  render() {
    const { props: { match, isLoaded } = {} } = this;
    return (
      <Fragment>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewWithContainer}
        />
        <Route
          path={`${match.path}/:collection`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={!isLoaded} {...props} />
          )}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoaded: selectShopCollectionsIsLoaded,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
