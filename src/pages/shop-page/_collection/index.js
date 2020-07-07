import React from "react";
import { connect } from "react-redux";

import "./styles.scss";
/* import CollectionItem from "../../../components/collection-item"; */
import { selectShopCollection } from "../../../store/shop/shop.selectors";

const ShopPageCollection = ({ collection }) => {
  console.log({ collection });
  return (
    <div className="shop-page-collection">
      <h2>Shop Page: Collection - {collection.title}</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collection)(state),
});
export default connect(mapStateToProps)(ShopPageCollection);
