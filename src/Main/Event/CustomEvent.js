import React from "react";
import EventCard from "./EventCard";

function CustomEvent({ custom }) {
  return (
    <div className="eventList">
      {custom.map((c) => {
        if (c.image) {
          return (
            <EventCard
              id={c.id}
              key={c.id}
              name={c.name}
              description={c.description}
              image={c.image}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default CustomEvent;
