import React from "react";
import styled from "styled-components";

const CartItemStyled = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`;

const ItemDetailsStyled = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

const ItemNameStyled = styled.span`
  font-size: 16px;
`;

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
