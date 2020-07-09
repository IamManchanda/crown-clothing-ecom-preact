import React from "react";
import { connect } from "react-redux";

import {
  CheckoutItemStyled,
  ImageContainerStyled,
  NameStyled,
  QuantityStyled,
  QuantityArrowStyled,
  QuantityValueStyled,
  PriceStyled,
  RemoveButtonStyled,
} from "./styles";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../store/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <CheckoutItemStyled>
      <ImageContainerStyled>
        <img src={imageUrl} alt={name} />
      </ImageContainerStyled>
      <NameStyled>{name}</NameStyled>
      <QuantityStyled>
        <QuantityArrowStyled onClick={() => removeItem(cartItem)}>
          &#10094;
        </QuantityArrowStyled>
        <QuantityValueStyled>{quantity}</QuantityValueStyled>
        <QuantityArrowStyled onClick={() => addItem(cartItem)}>
          &#10095;
        </QuantityArrowStyled>
      </QuantityStyled>
      <PriceStyled>{price}</PriceStyled>
      <RemoveButtonStyled onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonStyled>
    </CheckoutItemStyled>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
