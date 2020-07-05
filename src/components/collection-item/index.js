import React from "react";
import { connect } from "react-redux";

import "./styles.scss";
import CustomButton from "../custom-button";
import { addCartItem } from "../../store/cart/cart.actions";

const CollectionItem = ({ item, addCartItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addCartItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
