import React from "react";
import { withRouter } from "react-router-dom";

import {
  CollectionPreviewStyled,
  TitleStyled,
  PreviewStyled,
  FooterStyled,
} from "./styles";
import CollectionItem from "../collection-item";
import CustomButton from "../custom-button";

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
