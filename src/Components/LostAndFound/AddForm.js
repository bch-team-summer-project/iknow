import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

const AddForm = () => {
  const [data, setData] = useState({
    category: "",
    date: "",
    name: "",
    location: "",
    img: "",
    description: "",
    placeOrigin: "",
  });

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3002/items", data);
    alert("Your form is posted");
  };

  return (
    <>
      <Form onSubmit={submitData} className="form">
        <Form.Group>
          <Form.Select htmlFor="category" onChange={changeData}>
            <option>Select</option>
            <option value="1">Lost</option>
            <option value="2">Found</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="name">Name: </Form.Label>
          <Form.Control type="text" name="name" onChange={changeData} />
        </Form.Group>
        <Form.Group>
          <Form.File id="img" onChange={changeData} label="Photo" />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="category">Category: </Form.Label>
          <Form.Control type="text" name="category" onChange={changeData} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="location">Location: </Form.Label>
          <Form.Control
            type="text"
            name="recipeCuisine"
            onChange={changeData}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="date">Date: </Form.Label>
          <Form.Control type="text" name="date" onChange={changeData} />
        </Form.Group>
        <Form.Group>
          <Form.Select htmlFor="placeOrigin" onChange={changeData}>
            <option>Place of Origin</option>
            <option value="1">Nihtisillankuja 4, Espoo, 02631</option>
            <option value="2">
              Mäkelänkatu 56, Helsinki, “Löytötavarapalvelu"
            </option>
            <option value="3">Narinkka 3, Kampin keskus, 00100 Helsinki</option>
            <option value="4">Opastinsilta 6 A, Itä-Pasila, Helsinki</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="description">Description: </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            name="description"
            onChange={changeData}
          />
        </Form.Group>
        <Form.Group>
          <Row>
            <Col>
              <Button
                className="post"
                size="lg"
                block
                type="submit"
                variant="success"
                value="Send data"
              >
                Post recipe
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </>
  );
};

export default AddForm;
