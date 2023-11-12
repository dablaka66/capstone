import React from "react";
import { NavLink } from "react-router-dom";

export default function MainNavBar() {
  return (
    <nav className="navbar navbar-inverse">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">
          <img
            className="logo"
            src={require("../images/gifs/Intro-logo.gif")}
          />
          Game Of Trhones
        </a>
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
      </div>
    </nav>
  );
}
