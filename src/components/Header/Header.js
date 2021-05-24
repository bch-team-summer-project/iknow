import React from "react";
import { NavLink } from "react-router-dom";

import Nav from "./Nav";
import "./Header.css";
import logo from "../../img/thingshelsinki1.jpg";


const Header = () => {
  return (
    <header>
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
