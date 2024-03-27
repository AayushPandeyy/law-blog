import React from "react";
import "../css/navbar.css";
import logo from "../assets/logo.png";

export default function NavbarComponent() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="contact-btn">Contact Us</button>
      </nav>
    </>
  );
}
