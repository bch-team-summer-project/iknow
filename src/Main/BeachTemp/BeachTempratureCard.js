import React from "react";
import Card from "react-bootstrap/Card";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { makeStyles } from "@material-ui/core/styles";
import "./BeachTemprature.css";

// location icon //
const useStyles = makeStyles((theme) => ({
  clickableIcon: {
    color: "black",
    "&:hover": {
      color: "blue",
    },
  },
}));

const BeachTempratureCard = ({ beachTemprature }) => {
  const classes = useStyles();
  return (
    <Card className="card-beaches" key={beachTemprature.id}>
      <Card.Img
        className="card-img-top-beach"
        variant="top"
        src={beachTemprature.image}
        alt={beachTemprature.name}
      />
      <Card.Body>
        <Card.Title className="title-beaches">
          <span>
            <LocationOnIcon
              onClick={() => window.open(beachTemprature.beachLocation)}
              className={classes.clickableIcon}
            />
          </span>
          {beachTemprature.beachName}
        </Card.Title>
        <Card.Text
          className="card-text-beach"
          style={
            beachTemprature.waterTemp > 10
              ? { backgroundColor: "orange" }
              : { backgroundColor: "#42b6f5" }
          }
        >
          {"Water temprature is " + beachTemprature.waterTemp + "°C "}
          <br></br>
          {"Air temprature is " + beachTemprature.airTemp + "°C  "}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BeachTempratureCard;
