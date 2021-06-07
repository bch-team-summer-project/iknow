import React from "react";
import { Button, Form } from "react-bootstrap";

import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import axios from "axios";

function NewEvent() {
  const sendData = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/events").then(() => alert("posted!"));
  };

  return (
    <Form className="px-4 py-3" onSubmit={sendData}>
      <Form.Group>
        <Form.Label htmlFor="name" srOnly></Form.Label>
        <TextField id="eventName" label="Event name" fullWidth />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="short_description" srOnly></Form.Label>
        <TextField id="intro" label="Intro" fullWidth />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="images">Image </Form.Label>
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="location" srOnly></Form.Label>
        <TextField id="location" label="Location" fullWidth />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="description" srOnly></Form.Label>
        <TextField id="description" label="Description" fullWidth />
      </Form.Group>

      <Button type="submit" variant="success">
        Submit
      </Button>
    </Form>
  );
}

export default NewEvent;
