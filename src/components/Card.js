import React, { useState } from 'react';
import styles from './card.module.css';

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
    <div className={styles.card}>
      <img
        src={`https://robohash.org/${id}?set=set${pictureType}`}
        alt={`${name}`}
      />
      <div>
        {click ? (
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              setClick(false);
            }}
          >
            <input
              className={styles.input}
              type='text'
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
            />
            <input className={styles.cardBtn} type='submit' value='Change' />
          </form>
        ) : (
          <h2 onDoubleClick={() => setClick(true)}>{characterName}</h2>
        )}
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
