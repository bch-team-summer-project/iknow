import React, { useCallback, useEffect, useRef, useState } from "react";
import { Col, Row, Button, Dropdown } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router";
import axios from "axios";

import EventList from "./EventList";
import EventSpa from "./EventSpa";
import Search from "../Search";
import NewEvent from "./NewEvent";

function Events() {
  const [events, setEvents] = useState([]);
  const [online, setOnline] = useState([]);
  const [all, setAll] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

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
    // setIsLoading(true);
    let cancel;
    const getEvents = async () => {
      // let response = await fetch("http://localhost:3001/events");
      try {
        let response = await axios({
          method: "GET",
          url: `https://api.hel.fi/linkedevents/v1/event/?page=${page}`,
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });
        let result = await response.data;
        setEvents((prev) => [...prev, ...result.data]);
        setIsLoading(false);
      } catch (e) {
        if (axios.isCancel(e)) return;

        // if (e) return;
      }
    };
    getEvents();
    return () => cancel();
  }, [query, page]);

  useEffect(() => {
    setEvents([]);
  }, [query]);

  const getOnlineEvents = async () => {
    setIsLoading(true);
    let res = await axios.get(
      `https://api.hel.fi/linkedevents/v1/event/?internet_ongoing&page=${page}`
    );
    let result = await res.data;
    setOnline(result.data);
    setIsLoading(false);
  };
  console.log("this is online", online);
  const getAll = async () => {
    setIsLoading(true);
    setOnline([]);
    let res = await axios.get(
      `https://api.hel.fi/linkedevents/v1/event/?all_ongoing&page=${page}`
    );
    let result = await res.data;
    setAll(result.data);
    setIsLoading(false);
  };
  console.log("this is all ", all);

  const handleSearch = events.filter((e) => {
    if (e.name.en) {
      return e.name.en.toLowerCase().includes(query.toLowerCase());
    } else if (e.name.fi) {
      return e.name.fi.toLowerCase().includes(query.toLowerCase());
    } else {
      return e.name.sv.toLowerCase().includes(query.toLowerCase());
    }
  });
  const onlineSearch = online.filter((e) => {
    if (e.name.en) {
      return e.name.en.toLowerCase().includes(query.toLowerCase());
    } else if (e.name.fi) {
      return e.name.fi.toLowerCase().includes(query.toLowerCase());
    } else {
      return e.name.sv.toLowerCase().includes(query.toLowerCase());
    }
  });

  let { url } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={url} exact>
          <Row className="mb-5 eventBanner">
            <Col className="d-flex justify-content-center">
              <img src="/assets/images/event/e.png" alt="lady"></img>
            </Col>
            <Col className="d-flex align-items-center">
              <Col>
                <Button variant="warning" size="lg" onClick={getOnlineEvents}>
                  Online events
                </Button>
              </Col>
              <Col>
                <Button variant="warning" size="lg" onClick={getAll}>
                  All events
                </Button>
              </Col>
              <Col>
                <Dropdown>
                  <Dropdown.Toggle variant="warning" size="lg">
                    Create Event
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ width: "35rem" }}>
                    <NewEvent />
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Col>
          </Row>

          <Search
            search={(e) => {
              setQuery(e.target.value);
            }}
          />
          {isLoading && <p>Loading...</p>}
          <section className="events">
            {online && <EventList events={onlineSearch} />}
            {(events || all) && <EventList events={handleSearch} />}
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
