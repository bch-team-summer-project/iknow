import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

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
    short_description: "",
  });

  const [image, setImage] = useState("");
  const updateInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  console.log("inputs ", input);
  const uploadImg = () => {
    const img = new FormData();
    img.append("file", image);
    img.append("upload_preset", "rzt88msw");
    img.append("cloud_name", "event-project");
    fetch("https://api.cloudinary.com/v1_1/event-project/image/upload", {
      method: "post",
      body: img,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setInput({ ...input, image: data.secure_url });
        console.log(data);
        alert("image uploaded!");
      })
      .catch((err) => console.log(err));
  };

  const sendData = (e) => {
    e.preventDefault();
    // axios
    //   .post("http://localhost:3001/events", input)
    //   .then(() => alert("posted!"));
    axios
      .post("https://iknow-backend.herokuapp.com/newevent", input)
      .then(() => alert("posted!"));
  };

  return (
    <Form className="px-4 py-3 eventForm" onSubmit={sendData}>
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
          name="short_description"
          label="Intro"
          onChange={updateInput}
          fullWidth
        />
      </Form.Group>

      <Form.Group controlId="images">
        <Form.Label>Image</Form.Label>

        <Col sm="6">
          <Input
            className="input-img"
            accept="image/*"
            name="images"
            multiple
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />{" "}
        </Col>

        <Col>
          <Button className="eventBtn" onClick={uploadImg}>
            Upload
          </Button>
        </Col>
      </Form.Group>

      <Form.Group controlId="date">
        <TextField
          name="date"
          label="Start date & time"
          type="datetime-local"
          onChange={updateInput}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
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

      <Button className="eventBtn" type="submit" variant="success">
        Submit
      </Button>
    </Form>
  );
}

export default NewEvent;
