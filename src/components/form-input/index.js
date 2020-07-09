import React from "react";

import {
  FormInputGroupStyled,
  FormInputLabelStyled,
  FormInputStyled,
} from "./styles";

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
