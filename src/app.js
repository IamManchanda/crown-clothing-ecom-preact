import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./components/header";

// Code-splitting is automated for routes
import Home from "./routes/home";
import About from "./routes/about";
import Shop from "./routes/shop";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <About path="/about" />
          <Shop path="/shop/" />
          <Shop path="/shop/:collectionId" />
        </Router>
      </div>
    );
  }
}
