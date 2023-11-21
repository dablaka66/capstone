import React from "react";
import { NavLink } from "react-router-dom";
import "../css/NavegationBar.css";

export default function MainNavBar() {
  return (
    <nav className="navbar-inverse  row navegation ">
      <ul className="navbar-nav  navbar-expand-lg row">
        <li className="nav_item li">
          <NavLink to="/welcome" activeclassname="nav_item_active">
            Home Page
          </NavLink>
        </li>
        <li className="nav_item li">
          {" "}
          <NavLink to="/Characters" activeclassname="nav_item_active">
            Characters
          </NavLink>{" "}
        </li>
        <li className="nav_item li">
          <NavLink to="/Houses" activeclassname="nav_item_active">
            Houses
          </NavLink>
        </li>
        <li className="nav_item li ">
          <NavLink to="/Search" activeclassname="nav_item_active">
            Search
          </NavLink>
        </li>
        <li className="nav_item li">
          <NavLink to="/Quiz" activeclassname="nav_item_active">
            Quiz
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
