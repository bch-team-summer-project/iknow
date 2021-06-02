import React from "react";
import { Col, Form } from "react-bootstrap";

function Search({ search }) {
  return (
    <section className="search">
      <Col className="mb-5 mx-auto" xs={5} md={7}>
        <Form.Label htmlFor="searchBar" srOnly></Form.Label>
        <Form.Control
          type="text"
          placeholder="Search"
          name="searchBar"
          className="mb-3"
          onChange={search}
        />
      </Col>
    </section>
  );
}

export default Search;
