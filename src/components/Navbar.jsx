import React from "react";
import "../App";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <button className="button1">
        <Link to="/favourite">My BookShelf</Link>
      </button>
    </div>
  );
};

export default Navbar;
