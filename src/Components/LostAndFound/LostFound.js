import React, { useState, useEffect } from "react";
import axios from "axios";
import FoundCard from "./FoundCard";
import LostCard from "./LostCard";
import SearchBox from "./SearchBox";
import "./LostFound.css";

const LostFound = () => {
  const [items, setItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const searchValueHandler = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    axios.get("http://localhost:3002/items").then((res) => setItems(res.data));
  }, []);

  const itemFoundFilter = items.filter((item) => {
    return (
      item.category === "found" &&
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  const listFound = itemFoundFilter.map((found) => {
    console.log(found);
    return (
      <FoundCard
        key={found.id}
        img={found.img}
        name={found.name}
        date={found.date}
        location={found.location}
        description={found.description}
      />
    );
  });

  const itemLostFilter = items.filter((item) => {
    return (
      item.category === "lost" &&
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  const listLost = itemLostFilter.map((lost) => {
    console.log(lost.category);
    return (
      <LostCard
        key={lost.id}
        img={lost.img}
        name={lost.name}
        date={lost.date}
        location={lost.location}
        description={lost.description}
      />
    );
  });

  return (
    <div>
      <div>
        <h1>Search items</h1>
        <SearchBox search={searchValueHandler} />
      </div>
      <h2>Found items</h2>
      <div className="found-list">{listFound}</div>
      <h2>Lost items</h2>
      <div className="lost-list">{listLost}</div>
    </div>
  );
};

export default LostFound;
