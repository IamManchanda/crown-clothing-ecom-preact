import { h } from "preact";
import { connect } from "react-redux";
import { compose } from "redux";
import { memo } from "preact/compat";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";

import { selectBrowserisWebPSupported } from "../store/browser/browser.selectors";

const CartItemStyled = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`;

const ItemDetailsStyled = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

const ItemNameStyled = styled.span`
  font-size: 16px;
`;

const CartItem = ({
  item: { imageUrl, price, name, quantity } = {},
  isWebPSupported,
}) => (
  <CartItemStyled>
    <img src={imageUrl} alt={name} />
    <ItemDetailsStyled>
      <ItemNameStyled>
        {name} | {isWebPSupported ? "Webp" : "PNG"}
      </ItemNameStyled>
      <ItemNameStyled>
        {quantity} x ${price}
      </ItemNameStyled>
    </ItemDetailsStyled>
  </CartItemStyled>
);

const mapStateToProps = createStructuredSelector({
  isWebPSupported: selectBrowserisWebPSupported,
});
export default compose(connect(mapStateToProps), memo)(CartItem);
