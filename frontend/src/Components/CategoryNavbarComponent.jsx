import React from "react";
import "../css/categoryNavbar.css";
const categories = ["Criminal Law", "Family Law", "Corporate Law"];
export default function CategoryNavbarComponent() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </nav>
  );
}
