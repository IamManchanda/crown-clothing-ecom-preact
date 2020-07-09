import styled from "styled-components";

export const CheckoutPageStyled = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  .StripeCheckout {
    margin: 0 0 30px auto;
  }
`;

export const CheckoutHeaderStyled = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockStyled = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const TotalPriceStyled = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const TestWarningStyled = styled.div`
  text-align: center;
  margin: 40px 0;
  font-size: 24px;
  color: red;
`;
