import React, { useState, useEffect } from "react";
import BeachTempratureCard from "./BeachTempratureCard";



const Beaches = () => {
  const [state, setState] = useState({
    beaches:[],
    cities:[]
  });

  const cityNames = ["Helsinki", "Espoo", "Vantaa"];

  useEffect(() => {
    fetch("https://iknow-backend.herokuapp.com/beachTemp")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("dfggdfgdfgdfgdfgdfgdfgdfgdfgdfgdfg    dfgdfgdfdfg");
        setState({...state, beaches: responseJson});
      
     
      });
  }, []);
  const renderedResult = (
    <div>
      {state.beaches.map((beachTemp) => (
        <BeachTempratureCard beachTemprature={beachTemp} />
      ))}
    </div>
  );
  return renderedResult;
};

export default Beaches;
