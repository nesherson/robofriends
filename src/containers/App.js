import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { Robots } from '../robots.js';
import './app.css';

function returnRobot() {
  return Robots[Math.floor(Math.random() * 10 - 2)];
}

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((data) => {
        const tempRobots = data.map((user) => {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        });
        setRobots(tempRobots);
      });
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className='main'>
      <h1 className='header'>Robofriends</h1>
      <SearchBox searchChange={(e) => setSearchField(e.target.value)} />
      <button onClick={() => setRobots([...robots, returnRobot()])}>
        Click me
      </button>
      <CardList robots={filteredRobots} />
    </div>
  );
};

export default App;
