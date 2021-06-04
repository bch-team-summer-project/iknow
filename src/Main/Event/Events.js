import React, { useCallback, useEffect, useRef, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router";

import EventList from "./EventList";
import EventSpa from "./EventSpa";
import Search from "./Search";

import './customEventCss.css';

function Events() {
  const [events, setEvents] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  
  const [searchTerm, setSearchTerm] = useState("");//¨¨
  const [isLoading, setIsLoading] = useState(true);
  const loader = useRef();

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
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

  const getEvents = async () => {
    //let response = await fetch("http://localhost:3001/events");
    let response = await fetch(
      `https://api.hel.fi/linkedevents/v1/event/?page=${page}`
    );
    let result = await response.json();
    setEvents((prev) => [...prev, ...result.data]);
    setIsLoading(false);
  };

  useEffect(() => {
    // setIsLoading(true);
    getEvents();
  }, [query, page]);
  console.log("this is events", events);

  const handleSearch = events.filter((e) => {
    if (e.name.en) {
      return e.name.en.toLowerCase().includes(query.toLowerCase());
    } else if (e.name.fi) {
      return e.name.fi.toLowerCase().includes(query.toLowerCase());
    } else {
      return e.name.sv.toLowerCase().includes(query.toLowerCase());
    }

  });

  // delaying search so user has time to type
  // before searching activates ¨¨
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      console.log('search term: ', searchTerm);
      setQuery(searchTerm);
    }, 3000);
    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);
  // ¨¨

  let { url } = useRouteMatch();

  return (
    <>
      <div className="top-graphic-and-cards-container">
        <div className="top-graphic-and-cards-lady-img">
          <img src="/assets/images/event/e.png" alt="lady"></img>
        </div>
        <div className="events-category-all-cards">
        <a href="#" alt="click to find online events">
        <div className="events-category-card-1" onClick={() => console.log('card-1 clic')}>
          <p>Online events</p>
        </div>
        </a>
        <a href="#" alt="click to find offline events">
        <div className="events-category-card-2"  onClick={() => console.log('card-2 clic')}>
          <p>Offline events</p>
        </div>
        </a>
        <a href="#" alt="click to find all events">
        <div className="events-category-card-3"  onClick={() => console.log('card-3 clic')}>
          <p>All events</p>
        </div>
        </a>
        </div>
      </div>
      <div className="events-container">
      <Switch>
        <Route path={url} exact>   
          <Search
            search={(e) => {
              //setQuery(e.target.value);
              setSearchTerm(e.target.value);//¨¨
            }}
          />
          {isLoading && <p>Loading...</p>}
          <section className="events">
            <EventList events={handleSearch} />
          </section>
          <div ref={loader} />
        </Route>

        <Route path={`${url}/:id`}>
          <EventSpa />
        </Route>
      </Switch>
      </div>
    </>
  );
}

export default Events;
