import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    console.log("dfgdfgdfgdfgdfgdfgd");
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        setEvents(responseJson.data);
      });
  }, []);


  const renderedResult = (
    <div >
      {events.map((event) => (
        <EventCard event={event} />
      ))}
    </div>
  );

  return renderedResult;
};

export default Events;
