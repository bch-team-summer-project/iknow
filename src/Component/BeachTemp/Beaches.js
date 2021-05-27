import React, { useState, useEffect } from "react";
import BeachTempratureCard from "./BeachTempratureCard";

const Beaches = () => {
  const [beaches, setBeaches] = useState([]);

  useEffect(() => {
    fetch("https://iknow-backend.herokuapp.com/beachtemp")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setBeaches(responseJson);
      });
  }, []);


  const renderedResult = (
    <div >
      {beaches.map((beachTemp) => (
        <BeachTempratureCard beachTemprature={beachTemp} />
      ))}
    </div>
  );

  return renderedResult;
};

export default Beaches;
