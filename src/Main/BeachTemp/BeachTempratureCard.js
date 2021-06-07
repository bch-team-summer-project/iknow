import React from "react";
import Card from "react-bootstrap/Card";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./BeachTemprature.css";

const BeachTempratureCard = ({ beachTemprature }) => {
  return (
    <Card key={beachTemprature.id}>
      <Card.Img
        variant="top"
        src={beachTemprature.image}
        alt={beachTemprature.name}
      />
      <Card.Body>
        <Card.Title>
          <span>
            <LocationOnIcon />
          </span>
          {beachTemprature.beachName}
        </Card.Title>
        <Card.Text
          style={
            beachTemprature.waterTemp > 10
              ? { backgroundColor: "orange" }
              : { backgroundColor: "#42b6f5" }
          }
        >
          {"Water temprature is " + beachTemprature.waterTemp + "°C "}
          {"Air temprature is " + beachTemprature.airTemp + "°C  "}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BeachTempratureCard;
