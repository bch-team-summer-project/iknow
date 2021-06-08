import React from "react";
import CustomCard from "./CustomCard";

function CustomEvent({ custom }) {
  return (
    <div className="eventList">
      {custom.map((c) => {
        if (c.image) {
          return (
            <CustomCard
              id={c.id}
              key={c.id}
              start_time={c.date}
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
