import React from "react";
import FoundCard from "./FoundCard";
import CardGroup from "react-bootstrap/CardGroup";

const FoundList = ({ items, loading }) => {
  if (loading) {
    return <h2>Loading ...</h2>;
  }
  return (
    <CardGroup className="found-cards-group">
      {items.map((found) => (
        <FoundCard
          key={found.id}
          img={found.img}
          name={found.name}
          date={found.date}
          location={found.location}
          placeorigin={found.placeorigin}
          description={found.description}
          id={found.id}
        />
      ))}
    </CardGroup>
  );
};

export default FoundList;
