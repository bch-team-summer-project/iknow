import React from "react";
import Card from "react-bootstrap/Card";
import "./BeachTemprature.css";

import sunny from "./images/sunny.png";
import cloudy from "./images/cloudy.png";
import raining from "./images/rainy.png";
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
        <div className ="subitiles">
        <Card.Subtitle>{date}</Card.Subtitle>
        </div>
        <div className ="city">
        <Card.Title>{cityWeather.city}</Card.Title>
        </div>
        <img className ="weatherIcons" src={weatherIcon} width="200" height="100" />
        <Card.Text>{cityWeather.weather.temprature + "°C "}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CityWeatherCard;
