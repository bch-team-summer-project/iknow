import { React, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import MobileMenu from "./MobileMenu";
import "./Header.css";

const Header = () => {
  /*class for mobile menu show/hide*/
  const [mobMenu, setmobMenu] = useState(false);

  /*show/hide mobile menu on click*/
  const mobilemenuHandlerShow = () => {
    setmobMenu(!mobMenu);
  };

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
          ></img>
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
      <MenuOpenIcon
        id="mobileicon"
        style={{ fontSize: 50 }}
        onClick={mobilemenuHandlerShow}
      ></MenuOpenIcon>
      {mobMenu ? <MobileMenu click={mobilemenuHandlerShow} /> : null}
    </header>
  );
};

export default Header;
