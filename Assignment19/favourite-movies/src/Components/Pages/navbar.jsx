import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="nav">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/favorite" className="nav">Favorite</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
