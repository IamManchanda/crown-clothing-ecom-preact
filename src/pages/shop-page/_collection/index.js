import React from "react";
import { connect } from "react-redux";

import "./styles.scss";
import CollectionItem from "../../../components/collection-item";
import { selectShopCollection } from "../../../store/shop/shop.selectors";

const ShopPageCollection = ({ collection: { title, items } = {} }) => (
  <div className="shop-page-collection">
    <h2 className="title">{title}</h2>
    <div className="items">
      {items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collection)(state),
});
export default connect(mapStateToProps)(ShopPageCollection);
