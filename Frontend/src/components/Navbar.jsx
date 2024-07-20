// src/components/Navbar.js
import React from "react";
import logo from "../assets/logo.png";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Froker Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <a href="/">Home</a>
        <a href="/blogs">Blogs</a>
        <a href="/discover">Discover Froker</a>
      </div>
    </nav>
  );
};

export default Navbar;
