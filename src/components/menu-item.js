import { h } from "preact";
import { Link } from "preact-router/match";
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

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const menuItemLinkClassNames = `menu-item-link${
    size === "large" ? " menu-item-link--large" : ""
  }`;
  return (
    <Link className={menuItemLinkClassNames} href={`/${linkUrl}`}>
      <BackgroundImageStyled
        className="menu-item-link__background-image"
        imageUrl={imageUrl}
      />
      <ContentStyled className="menu-item-link__content">
        <TitleStyled>{title.toUpperCase()}</TitleStyled>
        <SubtitleStyled>SHOP NOW</SubtitleStyled>
      </ContentStyled>
    </Link>
  );
};

export default MenuItem;
