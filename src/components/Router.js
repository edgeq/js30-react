// Boilerplate React + Router
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Components to Render
import App from "./App";
import VideoApp from "./projects/11-VideoApp/App";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/VideoApp" component={VideoApp} />
    </Switch>
  </BrowserRouter>
);

export default Router;
