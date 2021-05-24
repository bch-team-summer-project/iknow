import React, { useState, useEffect } from "react";
import ActivityCard from "./ActivityCard";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/activities")
      .then((response) => response.json())
      .then((responseJson) => {
        setActivities(responseJson.data);
      });
  }, []);


  const renderedResult = (
    <div >
      {activities.map((activity) => (
        <ActivityCard activity={activity} />
      ))}
    </div>
  );

  return renderedResult;
};

export default Activities;
