import React from "react";
import { connect } from "react-redux";

import {
  CollectionItemStyled,
  BackgroundImageStyled,
  AddToCartButtonStyled,
  CollectionFooterStyled,
  CollectionNameStyled,
  CollectionPriceStyled,
} from "./styles";
import { addItem } from "../../store/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemStyled>
      <BackgroundImageStyled imageUrl={imageUrl} />
      <CollectionFooterStyled>
        <CollectionNameStyled>{name}</CollectionNameStyled>
        <CollectionPriceStyled>${price}</CollectionPriceStyled>
      </CollectionFooterStyled>
      <AddToCartButtonStyled onClick={() => addItem(item)} inverted>
        Add to Cart
      </AddToCartButtonStyled>
    </CollectionItemStyled>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
