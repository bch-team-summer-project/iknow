import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";

import EventCard from "./EventCard";
import EventSpa from "./EventSpa";
import Search from "./Search";

function Events() {
  const [events, setEvents] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);
    const getEvents = async () => {
      // let response = await fetch("http://localhost:3001/events");
      let response = await fetch(
        "https://open-api.myhelsinki.fi/v1/events/?tags_search=sports"
      );
      let result = await response.json();
      // setEvents(result);
      setIsLoading(false);
      let data = result.data;
      setEvents(data);
    };
    getEvents();
  }, []);
  console.log("this is events", events);

  let { url } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={url} exact>
          <Search />
          {isLoading && <p>Loading...</p>}

          <section className="events">
            {events.map((e) => (
              <EventCard
                id={e.id}
                key={e.id}
                name={e.name.en !== null ? e.name.en : e.name.fi}
                description={e.description.intro}
                image={
                  e.description.images.length ? e.description.images[0].url : ""
                } // if array.length is truthy => process array
              />
            ))}
          </section>
        </Route>

        <Route path={`${url}/:id`}>
          <EventSpa />
        </Route>
      </Switch>
    </>
  );
}

export default Events;
