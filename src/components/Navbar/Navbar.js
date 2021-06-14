import React from "react";
import "./Navbar.css";
import Icon from "../Icon/Icon";

function Navbar({ text }) {
  return (
    <div className="navBarStyle">
      <h1>{text}</h1>

      <Icon />
    </div>
  );
}

export default Navbar;
