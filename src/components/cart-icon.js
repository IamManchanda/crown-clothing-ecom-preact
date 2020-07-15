import { h } from "preact";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";

import ShoppingIcon from "../assets/svg/shopping-bag.svg";
import { toggleCartHidden } from "../store/cart/cart.actions";
import { selectCartItemsCount } from "../store/cart/cart.selectors";

const CartIconStyled = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ShoppingIconStyled = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
`;

const ItemCountStyled = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

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
