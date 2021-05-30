import React from "react";
import Card from "react-bootstrap/Card";

const FoundCard = ({ name, img, location, date, description }) => {
  return (
    <div className="found-card">
      <Card style={{ width: "18rem" }} className="found-container">
        <Card.Img variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{date}</Card.Title>
          <Card.Title>{location}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoundCard;
