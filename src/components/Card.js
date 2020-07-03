import React from 'react';
import './card.css';

const Card = ({ id, name, email, picture, onClick }) => {
  const pictureType =
    picture === 'robot'
      ? 1
      : picture === 'monster'
      ? 2
      : picture === 'robotHead'
      ? 3
      : 4;
  return (
    <div className='card' onClick={onClick}>
      <img
        src={`https://robohash.org/${id}?set=set${pictureType}`}
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
