import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./styles.scss";
import CollectionPreview from "../collection-preview";
import { selectShopCollectionsForPreview } from "../../store/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);
