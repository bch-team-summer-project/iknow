import React from "react";
import { Card, CardImg, Col, Row } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";

function EventCard({ name, image, description, id }) {
  let { url } = useRouteMatch();
  // const descLimit = (str, maxWords) => {
  //   return { __html: `${str.split(" ").splice(0, maxWords).join(" ")}...` };
  // };

  return (
    <Card className="mw-100" id={id}>
      <Row className="g-0 w-100">
        <Col md={4}>
          <CardImg src={image} alt={name}></CardImg>
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="mw-100">
              {/* <div dangerouslySetInnerHTML={descLimit(description, 15)} /> */}
              {description}
            </Card.Text>
            <Link to={`${url}/${id}`}>Learn More</Link>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default EventCard;