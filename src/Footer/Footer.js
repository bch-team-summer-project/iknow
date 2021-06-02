import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Footer.css";

const Footer = () => {
  const [weather, setWeather] = useState([]);
  /* const [weather, setWeather] = useState({
    icon: [
      "assets/images/weather-icons/sunny.png",
      "assets/images/weather-icons/cloudy.png",
      "assets/images/weather-icons/fog.png",
      "assets/images/weather-icons/partly-cloudy.png",
      "assets/images/weather-icons/rainy.png",
      "assets/images/weather-icons/snow.png",
      "assets/images/weather-icons/thunder.png",
    ],
    temperature: {
      Helsinki: 0,
      Vantaa: 0,
      Espoo: 0,
      HelDesc: "",
      VanDesc: "",
      EspooDesc: "",
    },
  }); */
  useEffect(() => {
    const getData = async () => {
      const res = await axios(`https://iknow-backend.herokuapp.com/////weather/`); 
      setWeather(res.data);
      console.log(res.data[0].city);
    };
    getData();
  }, []);

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
          <li>Events</li>
          <li>Beach water t&#8451;</li>
          <li>Lost and Found</li>
          <li>Laundry</li>
          <li>About</li>
        </ul>
        <div className="footer-weather">
          <div className="footer-city">
            <h3>Helsinki</h3>
          </div>
          <div className="footer-city">
            <h3>Vantaa</h3>
          </div>
          <div className="footer-city">
            <h3>Espoo</h3>
          </div>
        </div>
        <div className="footer-icons">
          <a
            href="https://github.com/bch-team-summer-project/iknow"
            target="_blanc"
          >
            <GitHubIcon style={{ fontSize: 50, color: "#ff9a04" }} />
          </a>
        </div>
      </section>
      <p>Copywrite 2021</p>
    </footer>
  );
};

export default Footer;
