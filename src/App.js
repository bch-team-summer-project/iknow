import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
