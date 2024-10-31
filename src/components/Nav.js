import React from 'react';
import './Nav.css';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <img src={logo} alt='LittleLemon Logo' />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/booking-form">Reservation</Link>
        </li>
        <li>
          <Link to="/order-online">Order Online</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>

      </ul>
    </nav>
  );
};

export default Nav;
