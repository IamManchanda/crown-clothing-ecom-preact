import { h } from "preact";
import { useEffect } from "preact/hooks";
import { Router } from "preact-router";
import { connect } from "react-redux";

import CollectionsOverviewWithContainer from "../components/collections-overview/with-container";
import CollectionPageWithContainer from "../components/collection-page/with-container";
import { fetchCollectionsStart } from "../store/shop/shop.actions";

const ShopPage = ({ collectionId, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <Router>
      <CollectionsOverviewWithContainer path="/shop" />
      <CollectionPageWithContainer
        collectionId={collectionId}
        path={`/shop/:${collectionId}`}
      />
    </Router>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
