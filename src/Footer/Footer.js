import React, { useState, useEffect } from "react";
import axios from "axios";
import GitHubIcon from "@material-ui/icons/GitHub";
import FooWeatherCard from "./FooWeatherCard";
import { HashLink as Link } from "react-router-hash-link";
import "./Footer.css";

const Footer = () => {
  const [weather, setWeather] = useState([]);
  const icons = {
    sun: "assets/images/weather-icons/sunny.png",
    cloudy: "assets/images/weather-icons/cloudy.png",
    fog: "assets/images/weather-icons/fog.png",
    partly: "assets/images/weather-icons/partly-cloudy.png",
    rainy: "assets/images/weather-icons/rainy.png",
    snow: "assets/images/weather-icons/snow.png",
    thunder: "assets/images/weather-icons/thunder.png",
    clear: "assets/images/weather-icons/clear.png",
  };

  useEffect(() => {
    const getData = async () => {
      const res = await axios(`https://iknow-backend.herokuapp.com/weather/`);
      setWeather(res.data);
      console.log(res.data[0].city);
    };
    getData();
  }, []);

  const weathercard = weather.map((weather) => {
    return (
      <FooWeatherCard
        key={weather.city}
        cityname={weather.city}
        icon={
          weather.weather.description.includes("clear")
            ? icons.sun
            : weather.weather.description.includes("cloudy")
            ? icons.cloudy
            : weather.weather.description.includes("fog")
            ? icons.fog
            : weather.weather.description.includes("cloud")
            ? icons.partly
            : weather.weather.description.includes("rain")
            ? icons.rainy
            : weather.weather.description.includes("snow")
            ? icons.snow
            : weather.weather.description.includes("thunder")
            ? icons.thunder
            : icons.clear
        }
        temperature={weather.weather.temprature}
      />
    );
  });

  return (
    <footer>
      <div className="logo">
        <Link to="/">
          <img
            className="logoimg"
            src="/assets/images/logo.svg"
            alt="footer logo"
            loading="lazy"
            title="iknow"
          ></img>
          iKnow
        </Link>
      </div>
      <section className="footer-nav">
        <ul>
          <li>
            <Link to="/events"> Events</Link>
          </li>
          <li>
            <Link to="/water">Beach water t&#8451;</Link>
          </li>
          <li>
            <Link to="/lost">Lost and Found</Link>
          </li>
          <li>
            <Link to="/laundry">Laundry</Link>
          </li>
          <li>
            <Link to="/#about">About</Link>
          </li>
        </ul>
        <div className="footer-weather">{weathercard}</div>
        <div className="footer-icons">
          <a href="https://github.com/bch-team-summer-project/" target="_blanc">
            <GitHubIcon style={{ fontSize: 50, color: "#ff9a04" }} />
          </a>
        </div>
      </section>
      <p>Copywrite 2021</p>
    </footer>
  );
};

export default Footer;
