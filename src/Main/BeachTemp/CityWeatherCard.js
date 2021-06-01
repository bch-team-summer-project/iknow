import React from "react";
import Card from "react-bootstrap/Card";
import "./BeachTemprature.css";

import partlyCloudy from "./images/sun_clouds.svg";
import sunny from "./images/sunny.svg";
import cloudy from "./images/sun_clouds.svg";
import raining from "./images/rain.svg";
const today = new Date();

const date =
  today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();

const CityWeatherCard = ({ cityWeather }) => {
  let weatherIcon = sunny;
  const weatherDescription = cityWeather.weather.description;
  if (weatherDescription.includes("rain")) {
    weatherIcon = raining;
  }
  if (weatherDescription.includes("clouds")) {
    weatherIcon = cloudy;
  }
  if (weatherDescription.includes("sunny")) {
    weatherIcon = sunny;
  }

  return (
    <Card
      className="weatherCard"
      key={cityWeather.id}
      style={{ flex: 1, backgroundColor: "#93ACED" }}
    >
      <Card.Body>
        <Card.Subtitle>{date}</Card.Subtitle>
        <Card.Title>{cityWeather.city}</Card.Title>
        <img src={weatherIcon} width="200" height="100" />
        <Card.Text>{cityWeather.weather.temprature + "°C "}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CityWeatherCard;
