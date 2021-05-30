import React from "react";
import Card from "react-bootstrap/Card";
import "./BeachTemprature.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const CityWeatherCard = ({ cityWeather }) => {
  return (
    <Card key={cityWeather.id} style={{ flex: 1, backgroundColor: "#24a7f2" }}>
      <Card.Body>
        <Card.Title>
          <span>
            <LocationOnIcon />
          </span>
          {cityWeather.city}
        </Card.Title>
        <Card.Text>
          <WbSunnyIcon />
          {cityWeather.weather.temprature + "°C "}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CityWeatherCard;
