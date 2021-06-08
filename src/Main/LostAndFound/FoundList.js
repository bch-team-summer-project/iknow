import React from "react";
import FoundCard from "./FoundCard";
import CardGroup from "react-bootstrap/CardGroup";

const FoundList = ({ items, loading }) => {
  if (loading) {
    return <h2>Loading ...</h2>;
  }
  return (
    <CardGroup>
      {items.map((found) => (
        <FoundCard
          key={found.id}
          img={found.img}
          name={found.name}
          date={found.date}
          location={found.location}
          placeOrigin={found.placeOrigin}
          description={found.description}
          id={found.id}
        />
      ))}
    </CardGroup>
  );
};

export default FoundList;
