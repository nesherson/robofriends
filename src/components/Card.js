import React from 'react';
import './card.css';

const Card = ({ id, name, email, picture, onClick }) => {
  return (
    <div className='card' onClick={onClick}>
      <img
        src={`https://robohash.org/${id}?set=set${picture === 'robot' ? 1 : 2}`}
        alt={`${name}`}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
