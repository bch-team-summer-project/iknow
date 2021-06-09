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
  const [all, setAll] = useState([]);
  const [custom, setCustom] = useState([]);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [heading, setHeading] = useState("");
  const [offHeading, setOffHeading] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  let { url } = useRouteMatch();
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
    let cancel;
    const getEvents = async () => {
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
      }
    };
    getEvents();
    return () => cancel();
  }, [query, page]);

  useEffect(() => {
    setEvents([]);
  }, [query]);

  // delaying search so user has time to type
  // before searching activates ¨¨
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      console.log("search term: ", searchTerm);
      setQuery(searchTerm);
    }, 3000);
    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);
  // load more events when reached end of currently displayed events, after going back from EventSpa
  // window.onscroll = () => {
  //   if (
  //     window.innerHeight + window.pageYOffset >=
  //     document.body.offsetHeight - 2
  //   ) {
  //     getEvents();
  //   }
  // };

  const getOnlineEvents = async () => {
    setIsLoading(true);
    setEvents([]);
    setAll([]);
    setOffline([]);
    setOffHeading("");
    setPage(1);
    let res = await axios.get(
      `https://api.hel.fi/linkedevents/v1/event/?internet_ongoing&page=${page}`
    );
    let result = await res.data;
    setOnline(result.data);
    setHeading("Online Events");
    setIsLoading(false);
  };
  console.log("online ", online);

  const getOffline = async () => {
    setIsLoading(true);
    setEvents([]);
    setAll([]);
    setOnline([]);
    setHeading("");
    setPage(1);
    let res = await axios.get(
      `https://api.hel.fi/linkedevents/v1/event/?local_ongoing&sort=-last_modified_time&page=${page}`
    );
    let result = await res.data;
    setOffline(result.data);
    setOffHeading("Offline Events");
    setIsLoading(false);
  };
  console.log("offline ", offline);

  const getAll = async () => {
    setOnline([]);
    setOffline([]);
    setIsLoading(true);
    setOffHeading("");
    setHeading("");
    setPage(1);
    let res = await axios.get(
      `https://api.hel.fi/linkedevents/v1/event/?all_ongoing&sort=-end_time&page=${page}`
    );
    let result = res.data;
    setAll(result);
    setIsLoading(false);
  };

  const getCustom = async () => {
    let res = await axios.get("https://iknow-backend.herokuapp.com/newevent");
    let result = res.data;
    setCustom(result);
  };
  console.log("custom", custom);

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

  const offlineSearch = offline.filter((e) => {
    if (e.name.en) {
      return e.name.en.toLowerCase().includes(query.toLowerCase());
    } else if (e.name.fi) {
      return e.name.fi.toLowerCase().includes(query.toLowerCase());
    } else {
      return e.name.sv.toLowerCase().includes(query.toLowerCase());
    }
  });

  const customSearch = custom.filter((e) => {
    return e.name.toLowerCase().includes(query.toLowerCase());
  });

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
                    getAll();
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
            {online && <EventList events={onlineSearch} heading={heading} />}
            {offline && (
              <EventList events={offlineSearch} heading={offHeading} />
            )}
            {custom && <CustomEvent custom={customSearch} />}
            {(events || all) && <EventList events={handleSearch} />}
          </section>
        </Route>

        <Route path={`${url}/newevent/:id`}>
          <CustomSpa />
        </Route>

        <Route path={`${url}/:id`}>
          <EventSpa />
        </Route>
      </Switch>
      <div ref={loader} />
    </div>
  );
}

export default Events;
