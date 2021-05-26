import React from "react";
import Card from "react-bootstrap/Card";


const BeachTempratureCard = ({beachTemprature}) => {
  console.log("jhghkjhkjhkjhkjhk   "+beachTemprature)
  const truncate = (str, no_words) => {
    return str.split(" ").splice(0, no_words).join(" ");
  };

  return (
  
    <Card key={beachTemprature.id}>
      <Card.Img variant="top" src={beachTemprature.image} alt={beachTemprature.name} />
      <Card.Body>
        <Card.Title>{beachTemprature.beachName}</Card.Title>
         <Card.Text>{"Beach water temprature is " + beachTemprature.waterTemp +"°C  "}</Card.Text> 
         <Card.Text>{"Beach air temprature is " + beachTemprature.airTemp +"°C  " }</Card.Text> 
       
      </Card.Body>
    </Card>
  );
};

export default BeachTempratureCard;
