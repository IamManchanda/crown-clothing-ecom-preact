import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import CollectionItem from "./collection-item";
import CustomButton from "./custom-button";

const CollectionPreviewStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const TitleStyled = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

const PreviewStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
`;

const CollectionPreview = ({ title, items, routeName, history }) => (
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
      <CustomButton onClick={() => history.push(`/shop/${routeName}`)}>
        Visit {title.toUpperCase()} Category
      </CustomButton>
    </FooterStyled>
  </CollectionPreviewStyled>
);

export default withRouter(CollectionPreview);
