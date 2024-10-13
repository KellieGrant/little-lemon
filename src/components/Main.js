import React from 'react';
import './Main.css';
import hero from '../images/restauranfood.jpg';
import food1 from '../images/food2.jpeg';
import food2 from '../images/food3.jpeg';

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

      <div className="about-content">
        <div className="text-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.
          </p>
        </div>

        <div className='about-section image-section'>
          <img className='image1' src={food1} alt='Image of food' />
          <img className='image2' src={food2} alt='Image of food' />
        </div>
      </div>
 
    </main>
  );
};

export default Main;