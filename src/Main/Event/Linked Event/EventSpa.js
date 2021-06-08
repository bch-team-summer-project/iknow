import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Container, Row, Col, Button, Figure } from "react-bootstrap";
import { GoCalendar } from "react-icons/go";
function EventSpa() {
  const [event, setEvent] = useState([]);
  const [title, setTitle] = useState();
  const [img, setImg] = useState();
  const [desc, setDesc] = useState("");
  const [time, setTime] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    // setIsLoading(true);
    const getEventDetail = async () => {
      // let resp = await fetch("http://localhost:3001/events/" + id);
      let resp = await fetch("https://api.hel.fi/linkedevents/v1/event/" + id);
      let data = await resp.json();
      setEvent(data);
      data.name.en ? setTitle(data.name.en) : setTitle(data.name.fi);
      setImg(data.images[0].url);
      data.description.en
        ? setDesc(data.description.en)
        : setDesc(data.description.fi);
      let start = data.start_time
        .replace(/[^\d-:]/g, " ")
        .trim()
        .replace(/:00 *$/, "");
      setTime(start);
      setIsLoading(false);
    };
    getEventDetail();
  }, [id]);
  console.log("this is spa ", event);
  console.log("this is name ", title);

  let eventDetails;
  if (isLoading) {
    eventDetails = <p>Loading..</p>;
  } else {
    eventDetails = (
      <Container className="mt-5 mb-5">
        <Button
          className="eventBtn"
          variant="outline-info"
          onClick={() => history.goBack()}
        >
          Back
        </Button>
        <Row className="mb-3 d-flex align-items-center  ">
          <Col sm="7">
            <h2 className="mb-5">{title}</h2>
            <h4>
              <GoCalendar /> Date and time
            </h4>
            {time}
          </Col>
          <Col className="event-single">
            <Figure.Image
              src={img}
              alt={event.id}
              className="mb-1"
              width={500}
              height={400}
            />
          </Col>
        </Row>
        {/* <Row className="mt-1 mb-3"> */}

        <u className="lead">
          <h4>Description</h4>
        </u>
        <div className="mb-2" dangerouslySetInnerHTML={{ __html: desc }} />

        <Button
          className="eventBtn"
          variant="outline-info"
          onClick={() => history.goBack()}
        >
          Back
        </Button>
      </Container>
    );
  }

  return <div>{eventDetails}</div>;
}

export default EventSpa;
