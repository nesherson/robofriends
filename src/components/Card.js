import React, { useState } from 'react';
import './card.css';

const Card = ({ id, name, email, picture }) => {
  const [characterName, setCharacterName] = useState(name);
  const [click, setClick] = useState(false);

  const pictureType =
    picture === 'robot'
      ? 1
      : picture === 'monster'
      ? 2
      : picture === 'robotHead'
      ? 3
      : 4;

  return (
    <div className='card'>
      <img
        src={`https://robohash.org/${id}?set=set${pictureType}`}
        alt={`${name}`}
      />
      <div>
        {click ? (
          <form
            className='form'
            onSubmit={(e) => {
              e.preventDefault();
              setClick(false);
            }}
          >
            <input
              className='input'
              type='text'
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
            />
          </form>
        ) : (
          <h2 onClick={() => setClick(true)}>{characterName}</h2>
        )}
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
