import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemStyled,
  BackgroundImageStyled,
  ContentStyled,
  TitleStyled,
  SubtitleStyled,
} from "./styles";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <MenuItemStyled
    large={size === "large"}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageStyled imageUrl={imageUrl} />
    <ContentStyled>
      <TitleStyled>{title.toUpperCase()}</TitleStyled>
      <SubtitleStyled>SHOP NOW</SubtitleStyled>
    </ContentStyled>
  </MenuItemStyled>
);

export default withRouter(MenuItem);
