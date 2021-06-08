import React from "react";
import Card from "react-bootstrap/Card";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { makeStyles } from "@material-ui/core/styles";
import "./BeachTemprature.css";

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
    <Card key={beachTemprature.id}>
      <Card.Img
        variant="top"
        src={beachTemprature.image}
        alt={beachTemprature.name}
      />
      <Card.Body>
        <Card.Title>
          <span>
            <LocationOnIcon
              onClick={() => window.open(beachTemprature.beachLocation)}
              className={classes.clickableIcon}
            />
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
          <br></br>
          {"Air temprature is " + beachTemprature.airTemp + "°C  "}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BeachTempratureCard;
