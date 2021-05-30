import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import EventCard from "./EventCard";
import EventSpa from "./EventSpa";
import Search from "./Search";

function Events() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getEvents = async () => {
      let response = await fetch("http://localhost:3001/events");
      //   "https://cors-anywhere.herokuapp.com/https://open-api.myhelsinki.fi/v1/events/?tags_search=adults"

      let result = await response.json();
      setEvents(result);
      setIsLoading(false);
    };
    getEvents();
  }, []);
  console.log("this is events", events);

  let { url } = useRouteMatch();

  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
  return (
    <>
      <Switch>
        <Route path={url} exact>
          <Search />

          <section className="events">
            {events.map((e) => (
              <EventCard
                id={e.id}
                key={e.id}
                name={e.name.en !== null ? e.name.en : e.name.fi}
                description={e.description}
                image={e.images}
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
