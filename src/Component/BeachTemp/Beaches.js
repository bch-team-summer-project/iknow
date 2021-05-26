import React, { useState, useEffect } from "react";
import BeachTempratureCard from "./BeachTempratureCard";

const Beaches = () => {
  const [beaches, setBeaches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/beachTemp")
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
