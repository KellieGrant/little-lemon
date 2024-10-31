import React from "react";
import './Confirmation.css';
import restaurant from"../images/restaurant.jpg";

export default function Confirmation() {
  return (
    <header className="confirmation-header">
      
      <img
        className="confirmation-image"
        src={restaurant}
        alt="Seating at Little Lemon"
      ></img>
      
      <section className="reserve-header-text">
        <h1>Your Reservation is Confirmed!</h1>
        <h4>A confirmation message has been sent to your email.</h4>
        <h4>Thanks for dining with us!</h4>
      </section>

      
    </header>
  );
}


