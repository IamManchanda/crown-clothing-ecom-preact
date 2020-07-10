import React from "react";
import { withRouter } from "react-router-dom";

import styled from "styled-components";

const BackgroundImageStyled = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

const ContentStyled = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

const MenuItemStyled = styled.div`
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  height: ${({ large }) => (large ? "380px" : "240px")};

  &:hover {
    cursor: pointer;

    & ${BackgroundImageStyled} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${ContentStyled} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &.large {
    height: 380px;
  }
`;

const TitleStyled = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

const SubtitleStyled = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;

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
