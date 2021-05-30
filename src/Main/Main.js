import React from "react";
import { Switch, Route } from "react-router-dom";
import Beaches from "./BeachTemp/Beaches";
import Events from "./Event/Events";
import Home from "./Home";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/water">
          <Beaches />
        </Route>
        <Route path="/lost"></Route>
        <Route path="/laundry"></Route>
      </Switch>
    </main>
  );
};

export default Main;
