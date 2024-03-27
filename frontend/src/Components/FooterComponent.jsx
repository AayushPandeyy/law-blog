import React from "react";
import "../css/footer.css";

export default function FooterComponent() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Your Company</p>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
