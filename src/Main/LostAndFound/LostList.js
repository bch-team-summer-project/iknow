import React from "react";
import LostCard from "./LostCard";
import CardGroup from "react-bootstrap/CardGroup";

const LostList = ({ items, loading }) => {
  if (loading) {
    return <h2>Loading ...</h2>;
  }
  return (
    <CardGroup>
      {items.map((item) => (
        <LostCard
          key={item.id}
          img={item.img}
          name={item.name}
          date={item.date}
          location={item.location}
          description={item.description}
          id={item.id}
        />
      ))}
    </CardGroup>
  );
};

export default LostList;
