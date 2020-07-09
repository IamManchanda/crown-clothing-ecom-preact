import styled from "styled-components";
import CustomButton from "../custom-button";

export const CartDropdownStyled = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 50px;
  z-index: 5;

  ${CustomButton} {
    margin-top: auto;
  }
`;

export const EmptyMessageStyled = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainerStyled = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
