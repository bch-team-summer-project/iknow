import React from "react";
import FoundCard from "./FoundCard";
import CardGroup from "react-bootstrap/CardGroup";

const FoundList = ({ items, loading }) => {
  if (loading) {
    return <h2>Loading ...</h2>;
  }
  return (
    <CardGroup>
      {items.map((item) => (
        <FoundCard
          key={item.id}
          img={item.img}
          name={item.name}
          date={item.date}
          location={item.location}
          placeOrigin={item.placeOrigin}
          description={item.description}
          id={item.id}
        />
      ))}
    </CardGroup>
  );
};

export default FoundList;
