import React, { useState, useEffect } from "react";
import axios from "axios";
import BeachTempratureCard from "./BeachTempratureCard";
import CityWeatherCard from "./CityWeatherCard";
import { Container, Row } from "react-bootstrap";

import logo from "./images/bicker.svg";

const Beaches = () => {
  const [beaches, setBeaches] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const beachesResponse = await axios(
        "https://iknow-backend.herokuapp.com/beachTemp"
      );
      const citiesResponse = await axios(
        "https://iknow-backend.herokuapp.com/weather/"
      );
      console.log(citiesResponse.data);
      setBeaches(beachesResponse.data);
      setCities(citiesResponse.data);
    };
    fetchData();
  }, []);
  const renderedResult = (
    <Container>
      <Row>
        <img src={logo} width="400" height="300" />
        {cities.map((cityWeather) => (
          <CityWeatherCard key={cityWeather.id} cityWeather={cityWeather} />
        ))}
      </Row>
      <Row>
        {beaches.map((beachTemp) => (
          <BeachTempratureCard key={beachTemp.id} beachTemprature={beachTemp} />
        ))}
      </Row>
    </Container>
  );
  return renderedResult;
};

export default Beaches;
