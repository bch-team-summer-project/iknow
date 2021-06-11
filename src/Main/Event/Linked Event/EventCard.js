import React from "react";
import { Card, CardImg, Col, Row } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";

function EventCard({ name, image, description, id, start_time }) {
  let { url } = useRouteMatch();

  return (
    <Card className="mw-100 eventListCard mb-3" id={id}>
      <Row className="g-0 w-100">
        <Col md={4} className="mb-5">
          <CardImg src={image} alt={name}></CardImg>
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Text className="text-dark event-text">{start_time}</Card.Text>
            <Card.Title className="title">{name}</Card.Title>
            <Card.Text className="mw-100 text-dark event-text">
              {description}
            </Card.Text>
            <Link to={`${url}/${id}`} style={{ color: "orange" }}>
              Learn More
            </Link>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default EventCard;
