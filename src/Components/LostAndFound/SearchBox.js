import React from "react";
import Form from "react-bootstrap/Form";

const Searchbox = ({ search }) => {
  return (
    <div className="search">
      <Form>
        <p>Search items: </p>
        <Form.Group>
          <Form.Control type="text" name="name" onChange={search} />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Searchbox;
