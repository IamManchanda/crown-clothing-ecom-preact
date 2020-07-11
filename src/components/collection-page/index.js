import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import CollectionItem from "../collection-item";
import { selectShopCollection } from "../../store/shop/shop.selectors";

const CollectionPageStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleStyled = styled.h1`
  font-size: 38px;
  margin: 0 auto 30px;
`;

const CollectionItemsContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 40px;
`;

const CollectionItemWrapperStyled = styled.div`
  margin-bottom: 40px;
`;

const CollectionPage = ({ collection: { title, items } = {} }) => (
  <CollectionPageStyled>
    <TitleStyled>{title}</TitleStyled>
    <CollectionItemsContainerStyled>
      {items.map((item) => (
        <CollectionItemWrapperStyled key={item.id}>
          <CollectionItem item={item} />
        </CollectionItemWrapperStyled>
      ))}
    </CollectionItemsContainerStyled>
  </CollectionPageStyled>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collection)(state),
});
export default connect(mapStateToProps)(CollectionPage);
