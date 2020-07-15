import { h } from "preact";
import { Router } from "preact-router";
import CollectionsOverview from "../components/collections-overview";
import CollectionPage from "../components/collection-page";

const Shop = ({ collectionId }) => (
  <Router>
    <CollectionsOverview path="/shop" />
    <CollectionPage
      collectionId={collectionId}
      path={`/shop/:${collectionId}`}
    />
  </Router>
);

export default Shop;
