import React, { useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

import './app.css';

const App = () => {
  const [searchField, setSearchField] = useState('');

  /*<CustomRobotCard
        onSubmit={(name, email) => {
          setRobots([...robots, { id: new Date(), name: name, email: email }]);
        }}
      />*/

  return (
    <div className='main'>
      <h1 className='header'>Robofriends</h1>
      <SearchBox searchChange={(e) => setSearchField(e.target.value)} />
      <CardList searchField={searchField} />
    </div>
  );
};

export default App;
