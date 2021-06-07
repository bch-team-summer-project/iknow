import React from "react";
import { Card, CardImg, Col, Row } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";

function EventCard({ name, image, description, id, start_time}) {
  let { url } = useRouteMatch();

  return (
    <Card className="mw-100 eventListCard" id={id}>
      <Row className="g-0 w-100">
        <Col md={4}>
          <CardImg src={image} alt={name}></CardImg>
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title><b>{name}</b>&nbsp;&nbsp;&nbsp;&nbsp;<i>{start_time}</i></Card.Title>
            <Card.Text className="mw-100">{description}</Card.Text>
            <Link to={`${url}/${id}`}>Learn More</Link>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default EventCard;
