import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { CollectionsOverviewStyled } from "./styles";
import CollectionPreview from "../collection-preview";
import { selectShopCollectionsForPreview } from "../../store/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewStyled>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewStyled>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);
