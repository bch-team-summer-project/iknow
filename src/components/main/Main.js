import { Switch, Route } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Events from "../events/Events";
import Activities from "../activities/Activities";
import Container from "react-bootstrap/Container";
import "./Main.css";

const Main = () => {
  return (
    <main>
    <Switch>
      <Container>
        <Row>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/activities">
            <Activities />
          </Route>
        </Row>
      </Container>
    </Switch>
  </main>
  );
};

export default Main;
