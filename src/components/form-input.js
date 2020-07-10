import React from "react";
import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyled = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

const FormInputGroupStyled = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

const FormInputLabelStyled = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyled}
  }
`;

const FormInputStyled = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabelStyled} {
    ${shrinkLabelStyled}
  }
`;

const FormInput = ({ label, onChange, ...otherProps }) => (
  <FormInputGroupStyled>
    <FormInputStyled
      className="form-input"
      onChange={onChange}
      {...otherProps}
    />
    {label && (
      <FormInputLabelStyled shrink={otherProps.value.length}>
        {label}
      </FormInputLabelStyled>
    )}
  </FormInputGroupStyled>
);

export default FormInput;
