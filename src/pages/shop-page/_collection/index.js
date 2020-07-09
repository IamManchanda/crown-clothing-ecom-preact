import React from "react";
import { connect } from "react-redux";

import {
  ShopPageCollectionStyled,
  TitleStyled,
  CollectionItemsContainerStyled,
  CollectionItemWrapperStyled,
} from "./styles";
import CollectionItem from "../../../components/collection-item";
import { selectShopCollection } from "../../../store/shop/shop.selectors";

const ShopPageCollection = ({ collection: { title, items } = {} }) => (
  <ShopPageCollectionStyled>
    <TitleStyled>{title}</TitleStyled>
    <CollectionItemsContainerStyled>
      {items.map((item) => (
        <CollectionItemWrapperStyled>
          <CollectionItem key={item.id} item={item} />
        </CollectionItemWrapperStyled>
      ))}
    </CollectionItemsContainerStyled>
  </ShopPageCollectionStyled>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collection)(state),
});
export default connect(mapStateToProps)(ShopPageCollection);
