import React from "react";
import { Card, Image, Col, Row } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";

function EventCard({ name, image, description, id }) {
  let { url } = useRouteMatch();

  return (
    <Card className="mw-100 " id={id}>
      <Row className="g-0 w-100 d-flex align-items-center">
        <Col md={4} className="d-flex align-items-center justify-content-start">
          <Image
            src={image}
            alt={name}
            roundedCircle
            style={{ width: 250, height: 250 }}
          ></Image>
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="mw-100">{description}</Card.Text>
            <Link to={`${url}/${id}`}>Learn More</Link>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default EventCard;
