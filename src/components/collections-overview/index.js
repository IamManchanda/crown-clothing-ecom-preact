import { h, Fragment } from "preact";
import Helmet from "preact-helmet";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";

import CollectionPreview from "../collection-preview";
import { selectShopCollectionsForPreview } from "../../store/shop/shop.selectors";

const CollectionsOverviewStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionsOverview = ({ collections }) => (
  <Fragment>
    <Helmet title="Shop" />
    <CollectionsOverviewStyled>
      {collections
        .sort((a, b) => a.idx - b.idx)
        .map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </CollectionsOverviewStyled>
  </Fragment>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);
