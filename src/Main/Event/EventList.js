import React from "react";
import EventCard from "./EventCard";

function EventList({ events }) {
  return (
    <div className="eventList">
      {events.map((e) => {
        if (e.images.length) {
          // if array.length is truthy(>0) => process array
          return (
            <EventCard
              id={e.id}
              key={e.id + Math.random(2) * 1}
              name={e.name.en ? e.name.en : e.name.fi}
              description={
                e.short_description.en
                  ? e.short_description.en
                  : e.short_description.fi
              }
              image={e.images[0].url}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default EventList;
