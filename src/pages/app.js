import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./home-page";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Homepage} />
    </Switch>
  </div>
);

export default App;
