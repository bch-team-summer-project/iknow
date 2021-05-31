import React from "react";
import { Switch, Route } from "react-router-dom";
import Beaches from "./BeachTemp/Beaches";
import Home from "./Home";
import LostFound from "./LostAndFound/LostFound";

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
          <Beaches />
        </Route>
        <Route path="/lost" component={LostFound}></Route>
        <Route path="/laundry"></Route>
      </Switch>
    </main>
  );
};

export default Main;
