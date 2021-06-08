import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ click }) => {
  return (
    <div id="mobilemenu">
      <ul>
        <li>
          <Link onClick={click} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={click} to="/events">
            Events
          </Link>
        </li>
        <li>
          <Link onClick={click} to="/water">
            Beach
          </Link>
        </li>
        <li>
          <Link onClick={click} to="/lost">
            Lost&Found
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
