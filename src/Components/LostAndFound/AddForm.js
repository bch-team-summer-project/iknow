import React, { useState, useEffect } from "react";
import axios from "axios";
import FormLostFound from "./FormLostFound";

const AddForm = () => {
  const [newItem, setNewItem] = useState({
    category: "",
    date: "",
    name: "",
    location: "",
    img: null,
    description: "",
    placeOrigin: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3002/items")
      .then((res) => setNewItem(res.data));
  }, []);

  const valueChangeHandler = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const fileSelectedHandler = (event) => {
    console.log(event.target.img[0]);
  };

  const submitAddForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/items", newItem)
      .then(() => {
        return axios.get("http://localhost:3002/items");
      })
      .then((res) => setNewItem(res.data));
    e.target.reset();
  };

  return <FormLostFound change={valueChangeHandler} submit={submitAddForm} />;
};

export default AddForm;
