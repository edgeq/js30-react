import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import VideoApp from "./projects/11-VideoPlayer/App";

import App from "./App";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/VideoApp" component={VideoApp} />
    </Switch>
  </BrowserRouter>
);

export default Router;
