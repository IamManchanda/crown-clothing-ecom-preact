import { h } from "preact";
import StripeCheckout from "react-stripe-checkout";

const { PREACT_APP_STRIPE_API_PUBLISHABLE_KEY: PUBLISHABLE_KEY } = process.env;

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = PUBLISHABLE_KEY;

  const handleToken = (token) => {
    console.log("Payment Successful, token: ", token);
    alert("Payment Successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now..."
      panelLabel="Pay Now..."
      name="Crown Dummy Corp Ltd."
      billingAddress
      shippingAddress
      image="https://firebasestorage.googleapis.com/v0/b/crown-clothing-ecom-react.appspot.com/o/crown-logo.png?alt=media"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={handleToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
