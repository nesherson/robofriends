import React, { useState, useEffect } from 'react';
import Card from './Card';
import CustomCard from './CustomCard';
import styles from './cardList.module.css';
import { ReactComponent as AddIcon } from './icons/add-circle-outline.svg';

function filterCharacters(characters, searchField) {
  return characters.filter((character) => {
    return character.name.toLowerCase().includes(searchField.toLowerCase());
  });
}

const returnRandomPicture = () => {
  const randomNum = Math.floor(Math.random() * 4 + 1);

  switch (randomNum) {
    default:
    case 1:
      return 'robot';
    case 2:
      return 'monster';
    case 3:
      return 'robotHead';
    case 4:
      return 'kitten';
  }
};

const CardList = ({ searchField }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      const tempCharacters = data.map((user) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          pictureType: returnRandomPicture(),
          type: 'default',
        };
      });
      setCharacters(tempCharacters);
    };
    fetchData();
  }, []);

  async function handleOnClick() {
    const response = await fetch('https://api.randomuser.me/');
    const data = await response.json();
    const [item] = data.results;

    const newCharacter = {
      id: item.registered.date,
      name: `${item.name.first} ${item.name.last}`,
      email: item.email,
      pictureType: returnRandomPicture(),
      type: 'random',
    };

    setCharacters([...characters, newCharacter]);
  }

  const filteredCharacters = filterCharacters(characters, searchField);

  return (
    <div className={styles.cardListWrapper}>
      <button className={styles.btn} onClick={handleOnClick}>
        RANDOM
      </button>
      <div className={styles.cardList}>
        {filteredCharacters.map((character) => {
          return (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              email={character.email}
              pictureType={character.pictureType}
              type={character.type}
            />
          );
        })}
        {!(searchField !== '') ? (
          <CustomCard
            onSubmit={(name, email, pictureType) => {
              setCharacters([
                ...characters,
                {
                  id: Date.now(),
                  name: name,
                  email: email,
                  pictureType: pictureType,
                  type: 'custom',
                },
              ]);
            }}
            icon={AddIcon}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default CardList;
