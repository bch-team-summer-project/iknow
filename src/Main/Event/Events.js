import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";

import EventList from "./EventList";
import EventSpa from "./EventSpa";
import Search from "./Search";

function Events() {
  const [events, setEvents] = useState([]);
  const [query, setQuery] = useState("");
  const [tags, setTags] = useState([]);
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
      let data = result.data;
      setEvents(data);
      setTags(result.tags);
      setIsLoading(false);
    };
    getEvents();
  }, []);
  console.log("this is events", events);
  console.log("this is categories", tags);

  const search = events.filter((e) => {
    if (e.name.en !== null) {
      return e.name.en.toLowerCase().includes(query.toLowerCase());
    } else {
      return e.name.fi.toLowerCase().includes(query.toLowerCase());
    }
  });

  let { url } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={url} exact>
          <Search search={(e) => setQuery(e.target.value)} />
          {isLoading && <p>Loading...</p>}

          <section className="events">
            <EventList events={search} />
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
