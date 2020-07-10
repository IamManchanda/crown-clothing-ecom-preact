import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import CustomButton from "./custom-button";
import { addItem } from "../store/cart/cart.actions";

const BackgroundImageStyled = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

const AddToCartButtonStyled = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

const CollectionItemStyled = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${BackgroundImageStyled} {
      opacity: 0.8;
    }

    ${AddToCartButtonStyled} {
      opacity: 0.85;
      display: flex;
    }
  }
`;

const CollectionFooterStyled = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const CollectionNameStyled = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

const CollectionPriceStyled = styled.span`
  width: 10%;
`;

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemStyled>
      <BackgroundImageStyled imageUrl={imageUrl} />
      <CollectionFooterStyled>
        <CollectionNameStyled>{name}</CollectionNameStyled>
        <CollectionPriceStyled>${price}</CollectionPriceStyled>
      </CollectionFooterStyled>
      <AddToCartButtonStyled onClick={() => addItem(item)} inverted>
        Add to Cart
      </AddToCartButtonStyled>
    </CollectionItemStyled>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
