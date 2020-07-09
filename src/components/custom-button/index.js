import React from "react";

import { CustomButtonStyled } from "./styles";

const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtonStyled {...otherProps}>{children}</CustomButtonStyled>
);

export default CustomButton;
