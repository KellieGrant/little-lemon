import React from 'react';

const DishCard = ({ image, name, description }) => {
  const cardStyle = {
    borderRadius: '12px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    backgroundColor: '#fff',
    margin: '16px',
    transition: 'transform 0.3s',
  };

  const imageStyle = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  };

  const contentStyle = {
    padding: '16px',
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: '8px',
  };

  const descriptionStyle = {
    color: '#555',
    fontSize: '14px',
    marginBottom: '12px',
  };

  const orderTextStyle = {
    fontWeight: 'bold',
    color: '#333',
    cursor: 'pointer',
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imageStyle} />
      <div style={contentStyle}>
        <div style={titleStyle}>{name}</div>
        <p style={descriptionStyle}>{description}</p>
        <div style={orderTextStyle}>Order Delivery</div>
      </div>
    </div>
  );
};

export default DishCard;