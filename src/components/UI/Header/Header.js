import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.css";
const header = () => {
  return (
    <nav className={classes.Navbar}>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/new-post">Post</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default header;
