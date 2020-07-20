import React, { useState } from 'react';
import styles from './card.module.css';

function getPictureType(pictureType) {
  switch (pictureType) {
    case 'robot':
      return 1;
    case 'monster':
      return 2;
    case 'robotHead':
      return 3;
    default:
      return 4;
  }
}

const Card = ({ id, name, email, pictureType, isRandom }) => {
  const [characterName, setCharacterName] = useState(name);
  const [renderNameForm, setRenderNameForm] = useState(false);

  return (
    <div className={isRandom ? styles.randomCharacterCard : styles.card}>
      <img
        src={`https://robohash.org/${id}?set=set${getPictureType(pictureType)}`}
        alt={`${name}`}
      />
      <div>
        {renderNameForm ? (
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              setRenderNameForm(false);
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
          <h2
            className={styles.name}
            onDoubleClick={() => setRenderNameForm(true)}
          >
            {characterName}
          </h2>
        )}
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
