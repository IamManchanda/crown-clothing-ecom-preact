import { h, Component } from "preact";
import { Router } from "preact-router";
import CollectionsOverview from "../components/collections-overview";
import CollectionPage from "../components/collection-page";

export default class Shop extends Component {
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render() {
    const { props: { collectionId } = {} } = this;
    return (
      <Router onChange={this.handleRoute}>
        <CollectionsOverview path="/shop" />
        <CollectionPage
          collectionId={collectionId}
          path={`/shop/:${collectionId}`}
        />
      </Router>
    );
  }
}
