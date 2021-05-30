import React, { Component } from "react";
import "./AddForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class FormLostFound extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "show" };
  }

  showSelect = (e) => {
    this.setState({ value: e.target.value });
  };

  fileSelectedHandler = (event) => {
    console.log(event.target.img[0]);
  };

  render() {
    return (
      <Form className="addItemPost">
        <Form.Row>
          <Form.Group as={Col} htmlFor="category">
            <Form.Label>Category: </Form.Label>
            <select onChange={this.showSelect}>
              <option value="show">Found</option>

              <option value="hide">Lost</option>
            </select>
          </Form.Group>

          <Form.Group as={Col} htmlFor="date">
            <Form.Label>Date and time: </Form.Label>
            <input type="datetime-local" name="date" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} htmlFor="location">
            <Form.Label>Location: </Form.Label>
            <Form.Control type="text" name="location" />
          </Form.Group>
          <Form.Group as={Col} htmlFor="name">
            <Form.Label>Item Name: </Form.Label>
            <Form.Control type="text" name="name" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} htmlFor="img">
            <Form.Label>Upload Photo: </Form.Label>
            <Form.Control
              type="file"
              id="img"
              name="img"
              onChange={this.fileSelectedHandler}
            />
          </Form.Group>

          <Form.Group
            as={Col}
            htmlFor="placeOrigin"
            className={this.state.value}
          >
            <Form.Label>Place of Origin: </Form.Label>
            <select>
              <option value="1">Nihtisillankuja 4, Espoo, 02631</option>
              <option value="2">
                Mäkelänkatu 56, Helsinki, “Löytötavarapalvelu"
              </option>
              <option value="3">
                Narinkka 3, Kampin keskus, 00100 Helsinki
              </option>
              <option value="4">Opastinsilta 6 A, Itä-Pasila, Helsinki</option>
            </select>
          </Form.Group>
        </Form.Row>

        <Form.Group as={Col} htmlFor="description">
          <Form.Label>Description: </Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>

        <Button variant="success" type="submit">
          Add Post
        </Button>
      </Form>
    );
  }
}
export default FormLostFound;
