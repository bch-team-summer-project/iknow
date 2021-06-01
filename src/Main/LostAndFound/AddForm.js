import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./AddForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const AddForm = () => {
  const [data, setData] = useState({
    category: "",
    date: "",
    name: "",
    location: "",
    img: "",
    placeOrigin: "Nihtisillankuja 4, Espoo, 02631",
    description: "",
  });

  const [state, setState] = useState({
    value: "",
  });

  const showSelect = (e) => {
    console.log(e.target.value);
    setState({ ...state, value: e.target.value });
  };

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    console.log(data);
    e.preventDefault();
    axios.post("http://localhost:3002/items", data);
  };

  return (
    <Form onSubmit={submitData} className="addItemPost">
      <Form.Row>
        <Form.Group as={Col} htmlFor="category">
          <Form.Label>Category: </Form.Label>
          <Form.Control
            as="select"
            name="category"
            onChange={(e) => {
              changeData(e);
              showSelect(e);
            }}
          >
            <option value="found">Found</option>
            <option value="lost">Lost</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} htmlFor="date">
          <Form.Label>Date and time: </Form.Label>
          <Form.Control
            type="datetime-local"
            name="date"
            onChange={changeData}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} htmlFor="location">
          <Form.Label>Location: </Form.Label>
          <Form.Control type="text" name="location" onChange={changeData} />
        </Form.Group>

        <Form.Group as={Col} htmlFor="name">
          <Form.Label>Item Name: </Form.Label>
          <Form.Control type="text" name="name" onChange={changeData} />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} htmlFor="img">
          <Form.Label>Upload Photo: </Form.Label>
          <Form.File type="file" id="img" name="img" onChange={changeData} />
          <Button>Upload</Button>
        </Form.Group>

        <Form.Group as={Col} htmlFor="placeOrigin" className={state.value}>
          <Form.Label>Place of Origin:</Form.Label>
          <Form.Control as="select" name="placeOrigin" onChange={changeData}>
            <option value="Nihtisillankuja 4, Espoo, 02631">
              Nihtisillankuja 4, Espoo, 02631
            </option>
            <option value="Mäkelänkatu 56, Helsinki, “Löytötavarapalvelu">
              Mäkelänkatu 56, Helsinki, “Löytötavarapalvelu"
            </option>
            <option value="Narinkka 3, Kampin keskus, 00100 Helsinki">
              Narinkka 3, Kampin keskus, 00100 Helsinki
            </option>
            <option value="Opastinsilta 6 A, Itä-Pasila, Helsinki">
              Opastinsilta 6 A, Itä-Pasila, Helsinki
            </option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Group as={Col} htmlFor="description">
        <Form.Label>Description: </Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          rows={4}
          onChange={changeData}
        />
      </Form.Group>

      <Button variant="success" type="submit" value="Send data">
        Add Post
      </Button>
    </Form>
  );
};

export default AddForm;
