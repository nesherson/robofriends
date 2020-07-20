import React, { useState } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

import styles from './app.module.css';

const App = () => {
  const [searchField, setSearchField] = useState('');

  return (
    <div className={styles.main}>
      <h1 className={styles.header}>Robofriends</h1>
      <SearchBox searchChange={(e) => setSearchField(e.target.value)} />
      <CardList searchField={searchField} />
    </div>
  );
};

export default App;
