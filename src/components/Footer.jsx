import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css"; // Import the custom CSS file

const Footer = () => {
  return (
    <footer className="footer-container  text-white py-4">
      {/* Top Section */}
      <div className="container d-flex justify-content-between align-items-center mb-4">
        {/* Social Media Icons */}
        <div className="d-flex align-items-center gap-3">
          <span className="fw-bold">Follow us on:</span>
          <FaFacebook className="footer-icon" />
          <FaTwitter className="footer-icon" />
          <FaInstagram className="footer-icon" />
          <FaLinkedin className="footer-icon" />
        </div>

        {/* App Download Section */}
        <div className="d-flex align-items-center gap-3">
          <span className="fw-bold">Download our app:</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Play Store"
            className="store-badge"
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download it on App Store"
            className="store-badge"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container border-top pt-3 d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div>
          <img
            src="Imarticus-logo.png"
            alt="Imarticus Logo"
            className="footer-logo"
          />
        </div>

        {/* Terms and Privacy Links */}
        <div className="d-flex gap-3">
          <a href="#" className="footer-link">
            Terms & Conditions
          </a>
          <span>|</span>
          <a href="#" className="footer-link">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
