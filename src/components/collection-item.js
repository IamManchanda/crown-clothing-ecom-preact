import { h } from "preact";
import { connect } from "react-redux";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";

import CustomButton from "./custom-button";
import { addItem } from "../store/cart/cart.actions";

import { selectBrowserisWebPSupported } from "../store/browser/browser.selectors";

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

  @media screen and (max-width: 991px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

const CollectionItemStyled = styled.div`
  width: 22vw;
  padding: 10px;
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

  @media screen and (max-width: 991px) {
    padding: 0;
  }

  @media screen and (max-width: 767px) {
    width: 40vw;
    margin-bottom: 20px;

    &:hover {
      ${BackgroundImageStyled} {
        opacity: unset;
      }

      ${AddToCartButtonStyled} {
        opacity: unset;
      }
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
  width: 85%;
  text-align: left;
  margin-bottom: 15px;

  @media screen and (max-width: 991px) {
    width: 75%;
  }
`;

const CollectionPriceStyled = styled.span`
  width: 15%;
  text-align: right;

  @media screen and (max-width: 991px) {
    width: 25%;
  }
`;

const CollectionItem = ({ item, addItem, isWebPSupported }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemStyled>
      <BackgroundImageStyled imageUrl={imageUrl} />
      <CollectionFooterStyled>
        <CollectionNameStyled>{name}</CollectionNameStyled>
        <CollectionPriceStyled>${price}</CollectionPriceStyled>
      </CollectionFooterStyled>
      <AddToCartButtonStyled onClick={() => addItem(item)} inverted>
        Add to Cart | {isWebPSupported ? "Webp" : "PNG"}
      </AddToCartButtonStyled>
    </CollectionItemStyled>
  );
};

const mapStateToProps = createStructuredSelector({
  isWebPSupported: selectBrowserisWebPSupported,
});
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
