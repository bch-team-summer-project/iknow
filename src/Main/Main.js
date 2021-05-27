import React from "react";
import { Switch, Route } from "react-router-dom";
import Beaches from "../Component/BeachTemp/Beaches";
import Home from "./Home";

const Main = () => {
  return (
    <main>
      This is main part
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/events"></Route>
        <Route path="/water">
          <Beaches/>
        </Route>
        <Route path="/lost"></Route>
        <Route path="/laundry"></Route>
      </Switch>
    </main>
  );
};

export default Main;
