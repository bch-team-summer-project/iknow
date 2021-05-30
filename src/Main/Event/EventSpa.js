import React, { useEffect, useState } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

function EventSpa() {
  const [event, setEvent] = useState([]);
  const [title, setTitle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();
  let { url } = useRouteMatch();
  let history = useHistory();

  useEffect(() => {
    // setIsLoading(true);
    const getEventDetail = async () => {
      let resp = await fetch("http://localhost:3001/events/" + id);
      let data = await resp.json();
      setEvent(data);
      data.name.en !== null ? setTitle(data.name.en) : setTitle(data.name.fi);
      setIsLoading(false);
    };
    getEventDetail();
  }, []);
  console.log("this is spa ", event);
  console.log("this is name ", title);
  let eventDetails;
  if (event) {
    eventDetails = (
      <Container className="mt-5 mb-5">
        <Row className="mb-3">
          <h2>{title}</h2>
        </Row>
        <Row className="mt-1 mb-3">
          <Col>
            <Image
              src={event.images}
              alt={event.id}
              className="mb-1"
              thumbnail
            />
          </Col>

          <Col className="ms-3">
            <Row>
              <strong className="mb-2">
                <u className="lead">Description</u>
              </strong>
              <p className="mb-2">
                <div dangerouslySetInnerHTML={{ __html: event.description }} />
              </p>
            </Row>
          </Col>
        </Row>

        <Button variant="info" onClick={() => history.goBack()}>
          Back
        </Button>
      </Container>
    );
  } else {
    eventDetails = <p>Loading..</p>;
  }

  return <div>{eventDetails}</div>;
}

export default EventSpa;
