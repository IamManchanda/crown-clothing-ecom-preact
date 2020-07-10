import React, { Fragment, Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { updateCollections } from "../../store/shop/shop.actions";
import withSpinner from "../../components/hoc/with-spinner";
import CollectionsOverview from "../../components/collections-overview";
import ShopPageCollection from "./_collection";

import {
  firestore,
  convertCollectionsSnapshotsToMap,
} from "../../firebase/utils";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const ShopPageCollectionWithSpinner = withSpinner(ShopPageCollection);

class ShopPage extends Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { props: { updateCollections } = {} } = this;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotsToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { state: { loading } = {}, props: { match } = {} } = this;
    return (
      <Fragment>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collection`}
          render={(props) => (
            <ShopPageCollectionWithSpinner isLoading={loading} {...props} />
          )}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
