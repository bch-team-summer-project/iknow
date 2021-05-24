import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const EventCard = ({event}) => {
  console.log(event)
  const truncate = (str, no_words) => {
    return str.split(" ").splice(0, no_words).join(" ");
  };

  return (
  
    <Card key={event.id}>
      <Card.Img variant="top" src={event.description.images[0].url} alt={event.name.en} />
      <Card.Body>
        <Card.Title>{event.name.en}</Card.Title>
        <Card.Text>{truncate(event.description.body, 30)}</Card.Text>
        <Link to={`/events/${event.id}`}>Read More</Link>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
