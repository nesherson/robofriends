import React from 'react';
import './card.css';

const Card = ({ id, name, email }) => {
  return (
    <div className='card'>
      <img src={`https://robohash.org/${id}?200x200`} alt={`${name}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
