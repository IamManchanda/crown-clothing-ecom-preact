import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { CartIconStyled, ShoppingIconStyled, ItemCountStyled } from "./styles";
import { toggleCartHidden } from "../../store/cart/cart.actions";
import { selectCartItemsCount } from "../../store/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconStyled onClick={toggleCartHidden}>
    <ShoppingIconStyled />
    <ItemCountStyled>{itemCount}</ItemCountStyled>
  </CartIconStyled>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
