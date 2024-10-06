import React from 'react';
import logo from '../images/logo.svg'

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt='Little Lemon Logo' />
      <ul id='doormat-nav'>
        <h4>Doormat Nav</h4>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#menu'>Menu</a></li>
        <li><a href='#Reservation'>Reservation</a></li>
        <li><a href='#order-online'>Order Online</a></li>
        <li><a href='#login'>Login</a></li>
      </ul>

      <ul id='contact'>
        <h4>Contact</h4>
        <li>Address</li>
        <li>(012)345-6789</li>
        <li>mario@littlelemon.com</li>
      </ul>

      <ul id='social-media'>
        <h4>Scoial media</h4>
        <li>Facebook</li>
        <li>Instigram</li>
        <li>X</li>
      </ul>
      <p>&copy; 2024 My App. All rights reserved.</p>
    </footer>
  );
};

export default Footer; 