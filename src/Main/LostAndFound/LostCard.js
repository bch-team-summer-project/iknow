import React from "react";
import Card from "react-bootstrap/Card";

const LostCard = ({ name, img, location, date, description, placeOrigin }) => {
  return (
    <div className="lost-card">
      <Card style={{ width: "20rem" }} className="lost-container">
        <Card.Img className="lostImg" variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title>
            <strong>{date}</strong>
          </Card.Title>
          <Card.Title>{location}</Card.Title>
          <Card.Title>
            <strong>{name}</strong>
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Title>{placeOrigin}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LostCard;
