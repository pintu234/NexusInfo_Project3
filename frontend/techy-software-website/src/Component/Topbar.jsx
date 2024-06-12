import React from "react";
import { Link } from "react-router-dom";

import "./Topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <div className="nav">
        <Link to="/" className="navbar-logo fa-fade">
          Techy Software
          <i className="fa-solid fa-t fa-sm fa-fade"></i>
          <i className="fa-solid fa-s fa-sm fa-fade"></i>
        </Link>
      </div>
      <div className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about-us" className="nav-link">About Us</Link>
        <Link to="/product-services" className="nav-link">Product/Services</Link>
        <Link to="/contact-us" className="nav-link">Contact Us</Link>
      </div>
    </div>
  );
}

export default Topbar;
