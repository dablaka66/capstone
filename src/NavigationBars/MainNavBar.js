import React from "react";
import { NavLink } from "react-router-dom";

export default function MainNavBar() {
  return (
    <nav className="navbar-inverse">
      <ul className="navigation nav navbar-nav ">
        <li className="nav_item">
          <NavLink to="/welcome" activeclassname="nav_item_active">
            Home Page
          </NavLink>
        </li>
        <li className="nav_item">
          {" "}
          <NavLink to="/Characters" activeclassname="nav_item_active">
            Characters
          </NavLink>{" "}
        </li>
        <li className="nav_item">
          <NavLink to="/Houses" activeclassname="nav_item_active">
            Houses
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/Search" activeclassname="nav_item_active">
            Search
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/Quiz" activeclassname="nav_item_active">
            Quiz
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
