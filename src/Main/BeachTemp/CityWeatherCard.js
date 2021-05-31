import React from "react";
import Card from "react-bootstrap/Card";
import "./BeachTemprature.css";
const today = new Date();

const date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();

const CityWeatherCard = ({ cityWeather }) => {
  return (
    <Card className="weatherCard" key={cityWeather.id} style={{ flex: 1, backgroundColor: "#93ACED" }}>
      <Card.Body>
      <Card.Subtitle >{date}</Card.Subtitle>
        <Card.Title>{cityWeather.city}</Card.Title>
        <Card.Text>
              {cityWeather.weather.temprature + "°C "}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CityWeatherCard;
