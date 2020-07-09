import React from "react";

import { CartItemStyled, ItemDetailsStyled, ItemNameStyled } from "./styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } = {} }) => (
  <CartItemStyled>
    <img src={imageUrl} alt={name} />
    <ItemDetailsStyled>
      <ItemNameStyled>{name}</ItemNameStyled>
      <ItemNameStyled>
        {quantity} x ${price}
      </ItemNameStyled>
    </ItemDetailsStyled>
  </CartItemStyled>
);

export default CartItem;
