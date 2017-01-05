import React from "react";
import { Route, IndexRoute } from "react-router";
import GlytchPage from "./components/glytch/GlytchPage";
import App from "./components/App";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={GlytchPage}/>
  </Route>
);
