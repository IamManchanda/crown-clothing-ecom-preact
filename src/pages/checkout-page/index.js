import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  CheckoutPageStyled,
  CheckoutHeaderStyled,
  HeaderBlockStyled,
  TotalPriceStyled,
  TestWarningStyled,
} from "./styles";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../store/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item";
import StripeCheckoutButton from "../../components/stripe-checkout-button";

const CheckoutPage = ({ cartItems, totalPrice }) => {
  const headerBlockTitles = [
    "Product",
    "Description",
    "Quantity",
    "Price",
    "Remove",
  ];
  return (
    <CheckoutPageStyled>
      <CheckoutHeaderStyled>
        {headerBlockTitles.map((title, idx) => (
          <HeaderBlockStyled key={idx}>
            <span>{title}</span>
          </HeaderBlockStyled>
        ))}
      </CheckoutHeaderStyled>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalPriceStyled>
        <span>Total: ${totalPrice}</span>
      </TotalPriceStyled>
      <TestWarningStyled>
        *Please don't use your credit card, instead <br /> use the following
        test credit card for payment* <br /> <br />
        4242 4242 4242 4242 - Exp: 01/70 - Cvv: 123
      </TestWarningStyled>
      <StripeCheckoutButton price={totalPrice} />
    </CheckoutPageStyled>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice,
});
export default connect(mapStateToProps)(CheckoutPage);
