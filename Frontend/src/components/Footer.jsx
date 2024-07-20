// src/components/Footer.js
import React from "react";
import logo from "../assets/logo.png";
import qrCode from "../assets/qr-code.jpg";

import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Froker Logo" />
        </div>
        <div className="footer-links">
          <div className="quicklinks">
            <h4 className="orange">Quicklinks</h4>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
          </div>
          <div className="contact-info">
            <h4 className="orange">Contacts</h4>
            <p>Whitefield, Bengaluru, 560066</p>
            <p>support@froker.in</p>
          </div>
        </div>
        <div className="qr-code">
          <h4 className="orange">Scan To Download</h4>
          <img src={qrCode} alt="QR Code" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Arroz Technology. All rights reserved</p>
      </div>
      
    </footer>
  );
};

export default Footer;
