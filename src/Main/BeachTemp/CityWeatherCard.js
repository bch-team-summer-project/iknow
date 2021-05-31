import React from "react";
import Card from "react-bootstrap/Card";
import "./BeachTemprature.css";


const CityWeatherCard = ({ cityWeather }) => {
  return (
    <Card className="weatherCard" key={cityWeather.id} style={{ flex: 1, backgroundColor: "#93ACED" }}>
      <Card.Body>
        <Card.Title>{cityWeather.city}</Card.Title>
        <Card.Text>
              {cityWeather.weather.temprature + "°C "}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CityWeatherCard;
