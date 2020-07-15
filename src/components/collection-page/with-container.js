import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollectionsIsLoaded } from "../../store/shop/shop.selectors";
import withSpinner from "../../components/with-spinner";
import CollectionPage from "./index";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectShopCollectionsIsLoaded(state),
});

const CollectionPageWithContainer = compose(
  connect(mapStateToProps),
  withSpinner,
)(CollectionPage);
export default CollectionPageWithContainer;
