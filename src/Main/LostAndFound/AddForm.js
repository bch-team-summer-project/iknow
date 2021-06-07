import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import "./AddForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const AddForm = () => {
  const [form, setForm] = useState({
    category: "",
    date: "",
    name: "",
    location: "",
    placeOrigin: "",
    description: "",
    img: "",
  });

  const [imageSelected, setImageSelected] = useState("");

  const uploadImage = () => {
    const img = new FormData();
    img.append("file", imageSelected);
    img.append("upload_preset", "tutorial");
    img.append("cloud_name", "lostfound");
    fetch("https://api.cloudinary.com/v1_1/lostfound/image/upload", {
      method: "post",
      body: img,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setForm({ ...form, img: data.url });
      })
      .catch((err) => console.log(err));
  };

  const [state, setState] = useState({
    value: "",
  });

  const showSelect = (e) => {
    e.preventDefault();
    setState({ ...state, value: e.target.value });
  };

  const changeData = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3002/items", form);
    if (!alert("Form is posted!")) {
      window.location.reload();
    }
  };

  return (
    <Form onSubmit={submitData} className="addItemPost">
      <Form.Row>
        <Form.Group as={Col} htmlFor="category">
          <Form.Label>Category: </Form.Label>
          <Form.Control
            style={{ width: "200px" }}
            as="select"
            name="category"
            onChange={(e) => {
              changeData(e);
              showSelect(e);
            }}
          >
            <option value="">Choose category</option>
            <option value="found">Found</option>
            <option value="lost">Lost</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} htmlFor="date">
          <Form.Label>Date and time: </Form.Label>
          <Form.Control
            style={{ width: "250px" }}
            type="datetime-local"
            name="date"
            onChange={changeData}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} htmlFor="location">
          <Form.Label>Location: </Form.Label>
          <Form.Control
            style={{ width: "500px" }}
            type="text"
            name="location"
            onChange={changeData}
          />
        </Form.Group>

        <Form.Group as={Col} htmlFor="name">
          <Form.Label>Item Name: </Form.Label>
          <Form.Control
            style={{ width: "400px" }}
            type="text"
            name="name"
            onChange={changeData}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} htmlFor="url">
          <Form.Label>Upload Photo: </Form.Label>
          <Form.File
            type="file"
            id="img"
            name="img"
            onChange={(e) => {
              setImageSelected(e.target.files[0]);
            }}
          />
          <Button
            className="uploadButton"
            variant="outline-success"
            onClick={uploadImage}
          >
            Upload
          </Button>
        </Form.Group>

        <Form.Group as={Col} htmlFor="placeOrigin" className={state.value}>
          <Form.Label>Place of Origin:</Form.Label>
          <Form.Control
            style={{ width: "400px" }}
            as="select"
            name="placeOrigin"
            onChange={changeData}
          >
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

      <Form.Row className="descriptionLF">
        <Form.Group as={Col} htmlFor="description">
          <Form.Label>Description: </Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            rows={6}
            onChange={changeData}
          />
        </Form.Group>

        <Button
          className="submitButton"
          size="lg"
          variant="success"
          type="submit"
          value="Send data"
        >
          Submit
        </Button>
      </Form.Row>
    </Form>
  );
};

export default AddForm;
