import React, { useState, useEffect } from 'react';
import Card from './Card';
import CustomRobotCard from '../components/CustomRobotCard';
import './cardList.css';

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
          picture: 'robot',
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
        name: item.name.first,
        email: item.email,
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
            console.log(filteredRobots);
          }}
        />
      </div>
    </div>
  );
};

export default CardList;
