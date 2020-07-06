import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./styles.scss";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../store/cart/cart.selectors";

const CheckoutPage = ({ cartItems, totalPrice }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => cartItem.name)}
    <div className="total">
      <span>Total: ${totalPrice}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice,
});
export default connect(mapStateToProps)(CheckoutPage);
