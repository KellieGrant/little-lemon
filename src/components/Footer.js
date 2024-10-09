import React from 'react';
import './Footer.css';
import logo from '../images/logo-square.png';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Add these icons via react-icons

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src={logo} alt="Little Lemon Logo" />
        </div>

        <div className="footer-section">
          <h2>Navigation</h2>
          <ul className="doormat-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservation">Reservation</a></li>
            <li><a href="#order-online">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Contact</h2>
          <ul className="contact">
            <li>123 Little Lemon St.</li>
            <li>(012) 345-6789</li>
            <li>mario@littlelemon.com</li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Follow Us</h2>
          <ul className="social-media">
            <li><a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a></li>
            <li><a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a></li>
            <li><a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Little Lemon. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;