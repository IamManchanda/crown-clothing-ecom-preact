import React, { Component } from "react";

import "./styles.scss";

import CollectionPreview from "../../components/collection-preview";
import SHOP_DATA from "../../fixtures/shop-data";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { state: { collections } = {} } = this;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
