import React from "react";
import Form from "react-bootstrap/Form";

const Searchbox = ({ search }) => {
  return (
    <div className="search">
      <Form>
        <Form.Group>
          <Form.Control type="text" name="name" onChange={search} />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Searchbox;
