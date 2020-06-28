import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/home-page";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop/hats" component={HatsPage} />
    </Switch>
  </div>
);

export default App;
