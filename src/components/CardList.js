import React, { useState, useEffect } from 'react';
import Card from './Card';
import CustomRobotCard from '../components/CustomRobotCard';
import styles from './cardList.module.css';

function filterRobots(robots, searchField) {
  return robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
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
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      const tempRobots = data.map((item) => {
        return {
          id: item.id,
          name: item.name,
          email: item.email,
          picture: returnRandomPicture(),
        };
      });
      setRobots(tempRobots);
    };
    fetchData();
  }, []);

  async function handleOnClick() {
    const response = await fetch('https://api.randomuser.me/');
    const data = await response.json();
    const [item] = data.results;

    const newRobot = {
      id: item.registered.date,
      name: `${item.name.first} ${item.name.last}`,
      email: item.email,
      picture: returnRandomPicture(),
    };

    setRobots([...robots, newRobot]);
  }

  const filteredRobots = filterRobots(robots, searchField);

  return (
    <div className={styles.cardListWrapper}>
      <button className={styles.btn} onClick={handleOnClick}>
        RANDOM
      </button>
      <div className={styles.cardList}>
        {filteredRobots.map((robot, i) => {
          return (
            <Card
              key={robot.id}
              id={robot.id}
              name={robot.name}
              email={robot.email}
              picture={robot.picture}
            />
          );
        })}
        {!(searchField !== '') ? (
          <CustomRobotCard
            onSubmit={(name, email, pictureType) => {
              setRobots([
                ...robots,
                {
                  id: Date.now(),
                  name: name,
                  email: email,
                  picture: pictureType,
                },
              ]);
            }}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default CardList;
