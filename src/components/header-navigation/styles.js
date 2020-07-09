import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderNavigationStyled = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainerStyled = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 10px;
`;

export const OptionsContainerStyled = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OptionStyled = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const OptionLinkStyled = styled(Link)`
  ${OptionStyled}
`;

export const OptionDivStyled = styled.div`
  ${OptionStyled}
`;
