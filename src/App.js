import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer/Footer";

class App extends Component {
  getRecipe = (event) => {
    event.preventDefault();
    console.log("working");
  };
  render() {
    return (
      <Router>
        <Container>
          <Row>
            <Header />
          </Row>
          <Row>
            <Main />
          </Row>
          <Row>
            <Footer />
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
