import { h } from "preact";
import styled, { css } from "styled-components";

const CustomButtonStyled = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${({ googleSignIn, inverted }) => {
    if (googleSignIn) {
      return css`
        background-color: #4285f4;
        color: white;
        border: none;

        &:hover {
          background-color: white;
          color: #357ae8;
          border: 1px solid black;
        }
      `;
    }

    if (inverted) {
      return css`
        background-color: white;
        color: black;
        border: 1px solid black;

        &:hover {
          background-color: black;
          color: white;
          border: none;
        }
      `;
    }

    return css`
      background-color: black;
      color: white;
      border: none;

      &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
      }
    `;
  }}
`;

const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtonStyled {...otherProps}>{children}</CustomButtonStyled>
);

export default CustomButton;
