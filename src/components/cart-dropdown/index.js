import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import {
  CartDropdownStyled,
  EmptyMessageStyled,
  CartItemsContainerStyled,
} from "./styles";
import CustomButton from "../custom-button";
import CartItem from "../cart-item";
import { selectCartItems } from "../../store/cart/cart.selectors";
import { toggleCartHidden } from "../../store/cart/cart.actions";

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
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdownStyled>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
