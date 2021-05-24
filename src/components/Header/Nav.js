import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/events">events</NavLink>
          </li>
          <li>
            <NavLink to="/activities">activities</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
