import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './app.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    if (robots.length === 0) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((resp) => resp.json())
        .then((data) => {
          const newRobots = data.map((user) => {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
            };
          });
          setRobots(newRobots);
        });
    }
  });

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className='main'>
      <h1 className='header'>Robofriends</h1>
      <SearchBox searchChange={(e) => setSearchField(e.target.value)} />
      <CardList robots={filteredRobots} />
    </div>
  );
};

export default App;
