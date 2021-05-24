import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid="true">
      <Navbar fixed="bottom" bg="dark" variant="dark">
        <p className="text">Made By AnkitaⒸ2021</p>
      </Navbar>
    </Container>
  );
};

export default Footer;
