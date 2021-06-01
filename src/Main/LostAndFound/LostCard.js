import React from "react";
import Card from "react-bootstrap/Card";

const LostCard = ({ name, img, location, date, description, placeOrigin }) => {
  return (
    <div className="lost-card">
      <Card style={{ width: "18rem" }} className="lost-container">
        <Card.Img
          variant="top"
          img
          src={`assets/images/lostfound/${img}.jpg`}
          alt={name}
        />
        <Card.Body>
          <Card.Title>{date}</Card.Title>
          <Card.Title>{location}</Card.Title>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Title>{placeOrigin}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LostCard;
