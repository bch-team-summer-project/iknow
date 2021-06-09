import React from "react";
import Card from "react-bootstrap/Card";
import "./BeachTemprature.css";
import sunny from "./images/sunny.png";
import cloudy from "./images/cloudy.png";
import raining from "./images/rainy.png";
import partly from "./images/partly.png";
import fog from "./images/fog.png";

const today = new Date();                         //current date for city weather card
const date =
  today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();

const CityWeatherCard = ({ cityWeather }) => {      //weather icons 
  let weatherIcon = sunny;
  const weatherDescription = cityWeather.weather.description;
  if (weatherDescription.includes("rain")) {
    weatherIcon = raining;
  }
  if (weatherDescription.includes("clouds")) {
    weatherIcon = cloudy;
  }
  if (weatherDescription.includes("few clouds")) {
    weatherIcon = partly;
  }
  if (weatherDescription.includes("fog")) {
    weatherIcon = fog;
  }
  if (weatherDescription.includes("sunny")) {
    weatherIcon = sunny;
  }

  return (                                                     //rendering city weather card 
    <Card
      className="weatherCard"
      key={cityWeather.id}
      style={{ flex: 1, backgroundColor: "#93ACED" }}
    >
      <Card.Body>
        <div className="subitiles">
          <Card.Subtitle>{date}</Card.Subtitle>
        </div>
        <div className="city">
          <Card.Title>{cityWeather.city}</Card.Title>
        </div>
        <img
          className="weatherIcons"
          src={weatherIcon}
          width="200"
          height="100"
          alt="icons"
        />
        <Card.Text>{cityWeather.weather.temprature + "°C "}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CityWeatherCard;
