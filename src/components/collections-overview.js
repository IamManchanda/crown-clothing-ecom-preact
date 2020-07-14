import { h } from "preact";
import styled from "styled-components";

const CollectionsOverviewStyled = styled.div`
  padding: 56px 20px;
  min-height: 100%;
  width: 100%;
`;

const CollectionsOverview = () => (
  <CollectionsOverviewStyled>
    <h1>CollectionsOverview</h1>
    <p>This is the CollectionsOverview component.</p>
  </CollectionsOverviewStyled>
);

export default CollectionsOverview;
