import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import LostFound from "../Components/LostAndFound/LostFound";

const Main = () => {
  return (
    <main>
      This is main part
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/events"></Route>
        <Route path="/water"></Route>
        <Route path="/lost" component={LostFound}></Route>
        <Route path="/laundry"></Route>
      </Switch>
    </main>
  );
};

export default Main;
