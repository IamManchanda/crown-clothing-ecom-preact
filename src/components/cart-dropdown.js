import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import CustomButton from "./custom-button";
import CartItem from "./cart-item";
import { selectCartItems } from "../store/cart/cart.selectors";
import { toggleCartHidden } from "../store/cart/cart.actions";

const CartDropdownStyled = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 50px;
  z-index: 5;
`;

const GoToCheckoutButtonStyled = styled(CustomButton)`
  margin-top: auto;
`;

const EmptyMessageStyled = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

const CartItemsContainerStyled = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownStyled>
    <CartItemsContainerStyled>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageStyled>Your cart is empty.</EmptyMessageStyled>
      )}
    </CartItemsContainerStyled>
    <GoToCheckoutButtonStyled
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </GoToCheckoutButtonStyled>
  </CartDropdownStyled>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
