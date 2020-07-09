import styled, { css } from "styled-components";

export const CheckoutItemStyled = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const CheckoutColumnStyled = css`
  width: 23%;
`;

export const ImageContainerStyled = styled.div`
  ${CheckoutColumnStyled}
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const NameStyled = styled.span`
  ${CheckoutColumnStyled}
`;

export const QuantityStyled = styled.span`
  ${CheckoutColumnStyled}
  display: flex;
`;

export const QuantityArrowStyled = styled.div`
  cursor: pointer;
`;

export const QuantityValueStyled = styled.span`
  margin: 0 10px;
`;

export const PriceStyled = styled.span`
  ${CheckoutColumnStyled}
`;

export const RemoveButtonStyled = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
