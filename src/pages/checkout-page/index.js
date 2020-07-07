import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./styles.scss";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../store/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item";
import StripeCheckoutButton from "../../components/stripe-checkout-button";

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
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>Total: ${totalPrice}</span>
    </div>
    <div className="test-warning">
      *Please don't use your credit card, instead <br /> use the following test
      credit card for payment* <br /> <br />
      4242 4242 4242 4242 - Exp: 01/70 - Cvv: 123
    </div>
    <StripeCheckoutButton price={totalPrice} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice,
});
export default connect(mapStateToProps)(CheckoutPage);
