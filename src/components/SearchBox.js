import React from 'react';
import styles from './searchBox.module.css';

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        className={styles.searchBox}
        type='search'
        placeholder='Search Robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
