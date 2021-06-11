import React, { useCallback, useEffect, useRef, useState } from "react";
import { Col, Row, Dropdown } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router";
import axios from "axios";

import EventList from "./Linked Event/EventList";
import EventSpa from "./Linked Event/EventSpa";
import Search from "../Search";
import NewEvent from "./NewEvent";
import CustomEvent from "./Custom/CustomEvent";
import CustomSpa from "./Custom/CustomSpa";

import "./Event.css";

function Events() {
  const [events, setEvents] = useState([]);
  const [online, setOnline] = useState([]);
  const [offline, setOffline] = useState([]);

  const [custom, setCustom] = useState([]);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [heading, setHeading] = useState("");

  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  let { url } = useRouteMatch();
  // loader is empty
  const loader = useRef(); // useRef to access DOM elements

  // useCallback to only render when target is intersecting, not on everytime render Events functional component
  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      // if target is intersecting, fetch new page
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null, // the root to use with intersection
      rootMargin: "20px", // root margin
      threshold: 0, // use to trigger the callback when the intersection's area changed
    };
    const observer = new IntersectionObserver(handleObserver, option); //IntersectionObserver API to asynchronously observe changes in the intersection of a target element
    if (loader.current) observer.observe(loader.current); // listen changes from the target element
  }, [handleObserver]);

  useEffect(() => {
    setEvents([]);
  }, [query]);

  // get all events
  const getEvents = useCallback(async () => {
    try {
      let response = await axios.get(
        `https://api.hel.fi/linkedevents/v1/event/?all_ongoing&page=${page}`
      );
      let result = await response.data;
      setEvents((prev) => {
        return [...new Set([...prev, ...result.data])]; // Set return unique values only & combine new data to the same array
      });
      setIsLoading(false);
    } catch (e) {
      // catch error
      if (e) return;
    }
    setHeading((prev) => (prev = "All Events"));
    setOffline([]); // remove offline events
    setOnline([]); // remove online events
  }, [page]);
  console.log("events ", events);

  // infinite scroll will only works with get all events since useEffect shouldnt be used with conditional rendering => cant apply to getOnlineEvents or getOffline
  // TODO: make custom hooks for infinte scroll and import it
  useEffect(() => {
    getEvents();
  }, [page, getEvents]);

  // useCallback to get online events only when it got invoked by clicking offline category
  const getOffline = useCallback(async () => {
    setIsLoading(true);
    setEvents([]); // remove all events
    setOnline([]); // remove online events
    // setPage(1);
    let res = await axios.get(
      `https://api.hel.fi/linkedevents/v1/event/?local_ongoing&page=${page}`
    );
    let result = await res.data;
    setOffline((prev) => [...prev, ...result.data]);
    setHeading((prev) => (prev = "Offline Events"));
    setIsLoading(false);
  }, [page]);

  // useCallback to get online events only when it got invoked by clicking online category
  const getOnlineEvents = useCallback(async () => {
    setIsLoading(true);
    setEvents([]); // remove all events
    setOffline([]); // remove offline events
    // setPage(1);
    let res = await axios.get(
      `https://api.hel.fi/linkedevents/v1/event/?internet_ongoing&page=${page}`
    );
    let result = await res.data;
    setOnline((prev) => [...prev, ...result.data]);
    setHeading((prev) => (prev = "Online Events"));
    setIsLoading(false);
  }, [page]);

  // delaying search so user has time to type
  // before searching activates ¨¨
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setQuery(searchTerm);
    }, 1000);
    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  // get events created from new event form
  const getCustom = async () => {
    let res = await axios.get("https://iknow-backend.herokuapp.com/newevent");
    let result = res.data;
    setCustom(result);
  };

  // search all events on query
  const handleSearch = events.filter((e) => {
    if (e.name.en) {
      return e.name.en.toLowerCase().includes(query.toLowerCase());
    } else if (e.name.fi) {
      return e.name.fi.toLowerCase().includes(query.toLowerCase());
    } else {
      return e.name.sv.toLowerCase().includes(query.toLowerCase());
    }
  });

  // search online events on query
  const onlineSearch = online.filter((e) => {
    if (e.name.en) {
      return e.name.en.toLowerCase().includes(query.toLowerCase());
    } else if (e.name.fi) {
      return e.name.fi.toLowerCase().includes(query.toLowerCase());
    } else {
      return e.name.sv.toLowerCase().includes(query.toLowerCase());
    }
  });

  // search offline events on query
  const offlineSearch = offline.filter((e) => {
    if (e.name.en) {
      return e.name.en.toLowerCase().includes(query.toLowerCase());
    } else if (e.name.fi) {
      return e.name.fi.toLowerCase().includes(query.toLowerCase());
    } else {
      return e.name.sv.toLowerCase().includes(query.toLowerCase());
    }
  });

  // search events created from new event form on query
  const customSearch = custom.filter((e) => {
    return e.name.toLowerCase().includes(query.toLowerCase());
  });

  // window.onscroll = () => {
  //   if (
  //     window.innerHeight + window.pageYOffset >=
  //     document.body.offsetHeight - 2
  //   ) {
  //     if (online.length) {
  //       getOnlineEvents();
  //       // } else if (online) {
  //       //   getOnlineEvents();
  //     } else if (offline.length) {
  //       getOffline();
  //     } else {
  //       getEvents();
  //     }
  //   }
  // };
  return (
    <div className="events-container" id="events-container">
      <Switch>
        <Route path={url} exact>
          <Row className="mb-5 eventBanner">
            <Col className="d-flex justify-content-center top-graphic-and-cards-container">
              <img src="/assets/images/event/e.png" alt="lady"></img>
            </Col>
            <Col>
              <div className="d-flex flex-row align-items-center mt-5 mb-5 event-category">
                <Col
                  className="orange-card text-light d-flex align-items-center justify-content-center "
                  onClick={getOnlineEvents}
                >
                  Online events
                </Col>

                <Col
                  className="orange-card text-light d-flex align-items-center justify-content-center"
                  onClick={getOffline}
                >
                  Offline events
                </Col>

                <Col
                  className="orange-card text-light d-flex align-items-center justify-content-center me-2"
                  onClick={() => {
                    getEvents();
                    getCustom();
                  }}
                >
                  All events
                </Col>
              </div>

              <div className="d-flex flex-row align-items-center event-category">
                <Col>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      size="lg"
                      className="text-light eventBtn"
                    >
                      Create Event
                    </Dropdown.Toggle>
                    <Dropdown.Menu aria-labelledby="dropdownMenuForm">
                      <NewEvent />
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </div>
            </Col>
          </Row>
          <div className="BS-search">
            <Search
              search={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>
          {isLoading && <p>Loading...</p>}
          <section className="events">
            <h1>{heading}</h1>
            {online && (
              <>
                <EventList events={onlineSearch} />
              </>
            )}

            {offline && (
              <>
                <EventList events={offlineSearch} />
              </>
            )}
            {custom && <CustomEvent custom={customSearch} />}
            {events && <EventList events={handleSearch} />}
          </section>
        </Route>

        <Route path={`${url}/newevent/:id`}>
          <CustomSpa />
        </Route>

        <Route path={`${url}/:id`}>
          <EventSpa />
        </Route>
      </Switch>
      {/* target */}
      <div ref={loader} />
      {/* target */}
    </div>
  );
}

export default Events;
