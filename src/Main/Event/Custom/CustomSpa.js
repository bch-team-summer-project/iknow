import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Container, Row, Col, Button, Figure } from "react-bootstrap";
import { GoCalendar } from "react-icons/go";
import { GrLocationPin } from "react-icons/gr";
import axios from "axios";

function CustomSpa() {
  const [customEvent, setCustomEvent] = useState([]);
  const [title, setTitle] = useState();
  const [img, setImg] = useState();
  const [desc, setDesc] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    // setIsLoading(true);
    const getDetail = async () => {
      // let resp = await fetch("http://localhost:3001/events/" + id);
      let resp = await axios.get(
        "https://iknow-backend.herokuapp.com/newevent/" + id
      );
      let data = await resp.data[0];
      setCustomEvent(data);
      setTitle(data.name);
      setImg(data.image);
      setDesc(data.description);
      setTime(data.date);
      setPlace(data.location);
      setIsLoading(false);
    };
    getDetail();
  }, [id]);
  console.log("this is custom spa ", customEvent);
  console.log("details ", title, img, desc, time);

  let customDetails;
  if (isLoading) {
    customDetails = <p>Loading..</p>;
  } else {
    customDetails = (
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
            <div>{time}</div>
            <h4>
              <GrLocationPin /> Location
            </h4>
            <div>{place}</div>
          </Col>
          <Col className="event-single">
            <Figure.Image
              src={img}
              alt={customEvent.id}
              className="mb-1"
              width={500}
              height={400}
            />
          </Col>
        </Row>

        <u className="lead">
          <h4>Description</h4>
        </u>
        {desc}

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

  return <div>{customDetails}</div>;
}

export default CustomSpa;
