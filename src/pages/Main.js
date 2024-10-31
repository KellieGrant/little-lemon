import React from 'react';
import './Main.css';
import hero from '../images/restauranfood.jpg';
import DishList from '../components/DishList';
import { Link } from 'react-router-dom';
import food1 from '../images/food2.jpeg';
import food2 from '../images/food3.jpeg';
import profile from '../images/profilepic.jpg';


const Main = () => {
  return (
    <main>
      <div className='hero-content'>
        <div className='hero-section'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Welcome to Little Lemon Restaurant, where every dish tells a story of flavor and tradition. Nestled in the heart of the city, we invite you to indulge in a delightful culinary experience featuring fresh, locally sourced ingredients and a menu inspired by the vibrant flavors of Mediterranean cuisine.</p>
          <div className='reserve-table'>
            <button>Reserve a Table</button>
          </div>
        </div>

        <div className='hero-section image-section'>
          <img src={hero} alt='Restaurant Patio' />
        </div>
        
      </div>

      <div className='specials'>
        <h2>Specials</h2>
        <div className='menu-button'>
          <Link to="/menu">
          <button>Online Menu</button>
          </Link>
        </div>
      </div>

      <div className='dishList'>
        <DishList />
      </div>

      <div className='testimonials-section'>

        <div className='testimonials-heading'>
          <h1>Testimonials</h1>
        </div>
        
        <div className='testimonials-container'>

          <div className='testimonials-card'>
            <div className='stars'>★★★★★</div>
            <img src={profile} alt='Sabrina L.' />
            <h4>Sabrina L.</h4>
            <p>"The atmosphere was out of this world!"</p>
          </div>

          <div className='testimonials-card'>
            <div className='stars'>★★★★★</div>
            <img src={profile} alt='Faith P.' />
            <h4>Faith P.</h4>
            <p>"The food was exceptional!"</p>
          </div>

          <div className='testimonials-card'>
            <div className='stars'>★★★★★</div>
            <img src={profile} alt='Ryan B.' />
            <h4>Ryan B.</h4>
            <p>"The staff are so friendly!"</p>
          </div>

          <div className='testimonials-card'>
            <div className='stars'>★★★★★</div>
            <img src={profile} alt='Peter B.' />
            <h4>Peter B.</h4>
            <p>"The food was so authentic!"</p>
          </div>

        </div>
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
          <img className='image1' src={food1} alt='Food' />
          <img className='image2' src={food2} alt='Food' />
        </div>
      </div>
 
    </main>
  );
};

export default Main;