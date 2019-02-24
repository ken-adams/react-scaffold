import React from "react";
import { Route, IndexRoute } from "react-router";
// import App from "./components/App";
import HomePage from "./UI/Pages/HomePage";

export default (
  <Route path="/" component={HomePage}>
    <IndexRoute component={HomePage} />
  </Route>
);
