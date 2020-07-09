import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import styled from "styled-components";

import {
  selectCartItems,
  selectCartTotalPrice,
} from "../store/cart/cart.selectors";
import CheckoutItem from "../components/checkout-item";
import StripeCheckoutButton from "../components/stripe-checkout-button";

const CheckoutPageStyled = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  .StripeCheckout {
    margin: 0 0 40px auto;
  }
`;

const CheckoutHeaderStyled = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const HeaderBlockStyled = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

const TotalPriceStyled = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

const TestWarningStyled = styled.div`
  text-align: center;
  margin: 40px 0;
  font-size: 24px;
  color: red;
`;

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
