import { h } from "preact";
import styled from "styled-components";

const CollectionPageStyled = styled.div`
  padding: 56px 20px;
  min-height: 100%;
  width: 100%;
`;

const CollectionPage = ({ collectionId }) => (
  <CollectionPageStyled>
    <h1>CollectionPage {collectionId}</h1>
    <p>This is the CollectionPage component.</p>
  </CollectionPageStyled>
);

export default CollectionPage;
