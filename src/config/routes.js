import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import LoadingContainer from "../container/LoadingContainer";

const LoadableLaunchesContainer = loadable(
  () => import("../pages/Launch/launches"),
  {
    fallback: LoadingContainer
  }
);

const LoadableLaunchDetailsContainer = loadable(
  () => import("../pages/Launch/launch-details"),
  {
    fallback: LoadingContainer
  }
);

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoadableLaunchesContainer} />
        <Route
          path="/launch-details/:id"
          component={LoadableLaunchDetailsContainer}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
