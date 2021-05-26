import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img
            className="logoimg"
            src="/assets/images/logo.svg"
            alt="logo"
            loading="lazy"
            title="iknow"
          ></img>{" "}
          iKnow
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/water">Beach</NavLink>
          </li>
          <li>
            <NavLink to="/lost">Lost&Found</NavLink>
          </li>
          <li>
            <NavLink to="/laundry">Laundry</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
