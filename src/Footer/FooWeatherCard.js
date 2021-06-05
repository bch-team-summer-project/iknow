import React from "react";

const FooWeatherCard = ({ cityname, icon, temperature }) => {
  return (
    <div className="footer-city">
      <h3>{cityname}</h3>
      <img src={icon} alt="weather-icon"></img>
      <span> {temperature}&#8451;</span>
    </div>
  );
};

export default FooWeatherCard;
