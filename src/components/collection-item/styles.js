import styled from "styled-components";
import CustomButton from "../custom-button";

export const BackgroundImageStyled = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const AddToCartButtonStyled = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const CollectionItemStyled = styled.div`
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

export const CollectionFooterStyled = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const CollectionNameStyled = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const CollectionPriceStyled = styled.span`
  width: 10%;
`;
