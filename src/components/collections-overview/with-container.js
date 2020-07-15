import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollectionIsFetching } from "../../store/shop/shop.selectors";
import withSpinner from "../../components/with-spinner";
import CollectionsOverview from "./index";

const mapStateToProps = createStructuredSelector({
  isLoading: selectShopCollectionIsFetching,
});

const CollectionsOverviewWithContainer = compose(
  connect(mapStateToProps),
  withSpinner,
)(CollectionsOverview);
export default CollectionsOverviewWithContainer;
