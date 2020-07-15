import styled from "styled-components";

export const AuthStyled = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 991px) {
    width: 90vw;
    margin: 0 auto 40px;
  }
`;

export const TitleStyled = styled.h2`
  margin: 10px 0;
`;

export const ButtonGroupStyled = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;
