import { h } from "preact";
import { Router } from "preact-router";

import Header from "./components/header";

// Code-splitting is automated for routes
import Home from "./routes/home";
import About from "./routes/about";
import Shop from "./routes/shop";

const App = () => {
  return (
    <div id="app">
      <Header />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Shop path="/shop/" />
        <Shop path="/shop/:collectionId" />
      </Router>
    </div>
  );
};

export default App;
