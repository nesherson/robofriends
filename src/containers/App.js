import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './app.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
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

      console.log(item);

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
    <div className='main'>
      <h1 className='header'>Robofriends</h1>
      <SearchBox searchChange={(e) => setSearchField(e.target.value)} />
      <button className='btn' onClick={() => setRobots([...robots, newRobot])}>
        RANDOM
      </button>
      <CardList robots={filteredRobots} />
    </div>
  );
};

export default App;
