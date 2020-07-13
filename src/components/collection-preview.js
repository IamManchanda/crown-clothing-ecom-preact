import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import CollectionItem from "./collection-item";
import CustomButton from "./custom-button";

const CollectionPreviewStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    align-items: center;
  }
`;

const TitleStyled = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

const PreviewStyled = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;

const FooterStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
`;

const CollectionPreview = ({ title, items, routeName }) => (
  <CollectionPreviewStyled>
    <TitleStyled>{title.toUpperCase()}</TitleStyled>
    <PreviewStyled>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewStyled>
    <FooterStyled>
      <Link to={`/shop/${routeName}`}>
        <CustomButton>Visit {title.toUpperCase()} Category</CustomButton>
      </Link>
    </FooterStyled>
  </CollectionPreviewStyled>
);

export default CollectionPreview;
