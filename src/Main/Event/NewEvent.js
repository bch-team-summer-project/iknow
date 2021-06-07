import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import axios from "axios";

function NewEvent() {
  const [input, setInput] = useState({
    name: "",
    location: "",
    date: "",
    image: "",
    description: "",
    type: "",
  });

  const [images, setImages] = useState("");
  const updateInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  console.log("inputs ", input);
  const sendData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/events", input)
      .then(() => alert("posted!"));
  };

  return (
    <Form className="px-4 py-3" onSubmit={sendData}>
      <Form.Group controlId="eventName">
        <TextField
          name="name"
          label="Event name"
          onChange={updateInput}
          fullWidth
        />
      </Form.Group>

      <Form.Group controlId="intro">
        <TextField
          name="intro"
          label="Intro"
          onChange={updateInput}
          fullWidth
        />
      </Form.Group>

      <Form.Group controlId="images">
        <Form.Label>Image </Form.Label>
        {/* <Input accept="image/*" name="images" multiple type="file" /> */}
        <Input
          name="images"
          multiple
          type="file"
          onChange={(e) => setImages(e.target.files[0])}
        />
      </Form.Group>

      <Form.Group controlId="location">
        <TextField
          name="location"
          label="Location"
          onChange={updateInput}
          fullWidth
        />
      </Form.Group>

      <Form.Group controlId="description">
        <TextField
          name="description"
          label="Description"
          onChange={updateInput}
          fullWidth
        />
      </Form.Group>

      <Button type="submit" variant="success">
        Submit
      </Button>
    </Form>
  );
}

export default NewEvent;
