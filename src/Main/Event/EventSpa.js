import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

function EventSpa() {
  const [event, setEvent] = useState([]);
  const [title, setTitle] = useState();
  const [img, setImg] = useState();
  const [desc, setDesc] = useState("");
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
        <Row className="mb-3">
          <h2>{title}</h2>
        </Row>
        <Row className="mt-1 mb-3">
          <Col>
            <Image src={img} alt={event.id} className="mb-1" thumbnail />
          </Col>

          <Col className="ms-3">
            <Row>
              <strong className="mb-2">
                <u className="lead">Description</u>
              </strong>
              <div
                className="mb-2"
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            </Row>
          </Col>
        </Row>

        <Button variant="info" onClick={() => history.goBack()}>
          Back
        </Button>
      </Container>
    );
  }

  return <div>{eventDetails}</div>;
}

export default EventSpa;
