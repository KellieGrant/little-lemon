import React from 'react';
import DishCard from './DishCard';
import salad from '../images/greek-salad.jpg';
import bruschetta from '../images/bruschetta.jpg';
import cake from '../images/lemon-desert.jpg';

const DishList = () => {
  const dishes = [
    {
      image: salad,
      name: 'Greek Salad',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
      image: bruschetta,
      name: 'Bruschetta',
      description: 'Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.',
    },
    {
      image: cake,
      name: 'Lemon Cake',
      description: 'This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
      {dishes.map((dish, index) => (
        <DishCard
          key={index}
          image={dish.image}
          name={dish.name}
          description={dish.description}
        />
      ))}
    </div>
  );
};

export default DishList;