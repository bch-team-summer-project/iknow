import React from "react";
import Card from "react-bootstrap/Card";

const LostCard = ({ name, img, location, date, description, placeOrigin }) => {
  return (
    <Card className="lost-card">
      <Card.Img className="lostImg" variant="top" src={img} alt={name} />
      <Card.Body className="card-bodyL">
        <Card.Title>
          <strong>{date}</strong>
        </Card.Title>
        <Card.Title>{location}</Card.Title>
        <Card.Title>
          <strong>{name}</strong>
        </Card.Title>
        <Card.Text className="descLost">{description}</Card.Text>
        <Card.Title>{placeOrigin}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default LostCard;
