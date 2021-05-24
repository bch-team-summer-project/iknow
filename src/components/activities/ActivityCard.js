import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ActivityCard = ({activity}) => {
  console.log(activity)
  const truncate = (str, no_words) => {
    return str.split(" ").splice(0, no_words).join(" ");
  };

  return (
  
    <Card key={activity.id}>
      <Card.Img variant="top" src={activity.description.images[0].url} alt={activity.name.en} />
      <Card.Body>
        <Card.Title>{activity.name.en}</Card.Title>
        <Card.Text>{truncate(activity.description.body, 30)}</Card.Text>
        <Link to={`/activities/${activity.id}`}>Read More</Link>
      </Card.Body>
    </Card>
  );
};

export default ActivityCard;
