import React from "react";
import LostCard from "./LostCard";
import CardGroup from "react-bootstrap/CardGroup";

const LostList = ({ items, loading }) => {
  if (loading) {
    return <h2>Loading ...</h2>;
  }
  return (
    <CardGroup className="lost-cards-group">
      {items.map((lost) => (
        <LostCard
          key={lost.id}
          img={lost.img}
          name={lost.name}
          date={lost.date}
          location={lost.location}
          description={lost.description}
          id={lost.id}
        />
      ))}
    </CardGroup>
  );
};

export default LostList;
