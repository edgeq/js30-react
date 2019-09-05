// Boilerplate React + Router
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Components to Render
import App from "./App";
import VideoApp from "./projects/11-VideoApp/App";
import Konami from "./projects/12-Konami/Konami";
import ScrollSlide from "./projects/13-ScrollSlide/App";
import LocalStorage from "./projects/15-LocalStorage/App";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/VideoApp" component={VideoApp} />
      <Route exact path="/Konami" component={Konami} />
      <Route exact path="/ScrollSlide" component={ScrollSlide} />
      <Route exact path="/LocalStorage" component={LocalStorage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
