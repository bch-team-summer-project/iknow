import React from "react";
import { Switch, Route } from "react-router-dom";
import Beaches from "./BeachTemp/Beaches";
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
<<<<<<< HEAD
        <Route path="/water"></Route>
        <Route path="/lost" component={LostFound}></Route>
=======
        <Route path="/water">
          <Beaches/>
        </Route>
        <Route path="/lost"></Route>
>>>>>>> upstream/main
        <Route path="/laundry"></Route>
      </Switch>
    </main>
  );
};

export default Main;
