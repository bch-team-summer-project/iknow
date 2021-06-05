import React from "react";
import Card from "react-bootstrap/Card";

const FoundCard = ({ name, img, location, date, description, placeOrigin }) => {
  return (
    <div className="found-card">
      <Card style={{ width: "20rem" }} className="found-container">
        <Card.Img className="foundImg" variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title>
            <strong>{date}</strong>
          </Card.Title>
          <Card.Title>{location}</Card.Title>
          <Card.Title>
            <strong>{name}</strong>
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Title>
            <strong>{placeOrigin}</strong>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoundCard;
