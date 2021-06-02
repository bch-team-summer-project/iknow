import React, { useState, useEffect } from "react";
import axios from "axios";
import BeachTempratureCard from "./BeachTempratureCard";
import CityWeatherCard from "./CityWeatherCard";
import { Container, Row } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";

import logo from "./images/bicker.svg";

const Beaches = () => {
  const [beaches, setBeaches] = useState([]);
  const [cities, setCities] = useState([]);

  function searchBeach(event) {
    if (event.target.value != "") {
      setBeaches(
        beaches.filter((x) => x.beachName.startsWith(event.target.value))
      );
    } else {
      setBeaches(beaches);
    }
  }

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
    <div className="beachContainer">
      <Row>
        <img src={logo} width="400" height="300" />
        {cities.map((cityWeather) => (
          <CityWeatherCard key={cityWeather.id} cityWeather={cityWeather} />
        ))}
      </Row>
      <Row>
        <form method="get" id="search">
          <input
            onChange={searchBeach}
            type="text"
            id="search-bar"
            name="searchQuery"
          />
          <SearchIcon />
        </form>
      </Row>
      <Row>
        {beaches.map((beachTemp) => (
          <BeachTempratureCard key={beachTemp.id} beachTemprature={beachTemp} />
        ))}
      </Row>
    </div>
  );
  return renderedResult;
};

export default Beaches;
