import React from 'react';
import './Main.css';
import hero from '../images/restaurant.jpg'

const Main = () => {
  return (
    <main>
      <div className='hero-content'>
        <div className='hero-section'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediteranian restaurant, focused on traditional recipes served with a modern twist.</p>
          <button>Reserve a Table</button>
        </div>

        <div className='hero-section image-section'>
          <img src={hero} alt='Restaurant Patio' />
        </div>
        
      </div>

      <div className='highlights-content'>
        <h1>Specials</h1>
        <button>Online Menu</button>
        <card></card>
        <card></card>
        <card></card>
      </div>

      <div className='testimonials-content'>


      </div>

      <div className='about-content'>

        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum dolor sit amet. Eos inventore harum et eaque repellat ut saepe iste! Qui optio corrupti a molestias aliquam est voluptatem quam et harum dicta. Et sapiente similique non voluptas ipsam ut dolorum iste qui unde maiores. Eum quia alias aut aspernatur earum nam consequuntur explicabo ea autem ullam ea consectetur amet ex deleniti rerum hic magnam laborum.</p>

      </div>

    </main>
  );
};

export default Main;