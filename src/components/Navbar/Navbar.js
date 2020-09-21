import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/navbar.css"

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            Mourad Boustani
          </Link>
          <div className="nav-menu">
            <div className="nav-item">Projecten</div>
            <div className="nav-item">Over mij</div>
            <div className="nav-item">Contact</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
