import React from "react";
import EventCard from "./EventCard";

function EventList({ events }) {
  return (
    <div className="eventList">
      {events.map((e) => {
        if (events) {
          return (
            <EventCard
              id={e.id}
              key={e.id}
              name={e.name.en !== null ? e.name.en : e.name.fi}
              description={e.description.intro}
              image={
                e.description.images.length ? e.description.images[0].url : ""
              } // if array.length is truthy => process array
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default EventList;
