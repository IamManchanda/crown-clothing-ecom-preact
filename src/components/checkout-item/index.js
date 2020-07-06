import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addCartItem,
  removeCartItem,
} from "../../store/cart/cart.actions";

import "./styles.scss";

const CheckoutItem = ({ cartItem, clearItem, addCartItem, removeCartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeCartItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addCartItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addCartItem: (item) => dispatch(addCartItem(item)),
  removeCartItem: (item) => dispatch(removeCartItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
