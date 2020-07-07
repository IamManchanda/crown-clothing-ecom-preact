import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./styles.scss";

const { REACT_APP_STRIPE_API_PUBLISHABLE_KEY: PUBLISHABLE_KEY } = process.env;

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = PUBLISHABLE_KEY;

  const handleToken = (token) => {
    console.log("Payment Successful, token: ", token);
  };

  return (
    <StripeCheckout
      label="Pay Now..."
      panelLabel="Pay Now..."
      name="Crown Dummy Corp Ltd."
      billingAddress
      shippingAddress
      image="https://i.imgur.com/Yz8IDjS.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={handleToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
