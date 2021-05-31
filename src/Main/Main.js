import React from "react";
import { Switch, Route } from "react-router-dom";
import Beaches from "./BeachTemp/Beaches";
import Home from "./Home/Home";
import LostFound from "../Components/LostAndFound/LostFound";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/events"></Route>
        <Route path="/water">
          <Beaches />
        </Route>
        <Route path="/lost">
          <LostFound />
        </Route>
        <Route path="/laundry"></Route>
      </Switch>
    </main>
  );
};

export default Main;
