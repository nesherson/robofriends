import React, { useState, useEffect } from 'react';
import Card from './Card';
import CustomRobotCard from '../components/CustomRobotCard';
import './cardList.css';

const returnRandomPicture = () => {
  const randomNum = Math.floor(Math.random() * 4 + 1);
  /*const randomPicture =
    randomNum === 1
      ? 'robot'
      : randomNum === 2
      ? 'monster'
      : randomNum === 3
      ? 'robotHead'
      : 'kitten';
*/
  let randomPicture = '';
  switch (randomNum) {
    case 1:
      randomPicture = 'robot';
      break;
    case 2:
      randomPicture = 'monster';
      break;
    case 3:
      randomPicture = 'robotHead';
      break;
    case 4:
      randomPicture = 'kitten';
      break;
    default:
      randomPicture = 'robot';
      break;
  }
  return randomPicture;
};

const CardList = ({ searchField }) => {
  const [robots, setRobots] = useState([]);
  const [newRobot, setNewRobot] = useState({});

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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.randomuser.me/');
      const data = await response.json();
      const [item] = data.results;

      setNewRobot({
        id: item.registered.date,
        name: `${item.name.first} ${item.name.last}`,
        email: item.email,
        picture: returnRandomPicture(),
      });
    };
    fetchData();
  }, [robots]);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className='cardList-wrapper'>
      <button className='btn' onClick={() => setRobots([...robots, newRobot])}>
        RANDOM
      </button>
      <div className='cardList'>
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
