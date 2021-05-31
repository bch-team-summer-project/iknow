import React, { useCallback, useEffect, useRef, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";

import EventList from "./EventList";
import EventSpa from "./EventSpa";
import Search from "./Search";

function Events() {
  const [events, setEvents] = useState([]);
  const [query, setQuery] = useState("");
  const [start, setStart] = useState(1);
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const loader = useRef();

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setStart((prev) => prev + 5);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  useEffect(() => {
    setEvents([]);
  }, [query]);

  useEffect(() => {
    const getEvents = async () => {
      // let response = await fetch("http://localhost:3001/events");
      let response = await fetch(
        `https://open-api.myhelsinki.fi/v1/events/?limit=5&start=${start}`
      );
      let result = await response.json();
      setEvents((prev) => [...prev, ...result.data]);
      setTags(result.tags);
      setIsLoading(false);
    };
    // setIsLoading(true);
    getEvents();
  }, [query, start]);
  console.log("this is events", events);

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
          <div ref={loader} />
        </Route>

        <Route path={`${url}/:id`}>
          <EventSpa />
        </Route>
      </Switch>
    </>
  );
}

export default Events;
