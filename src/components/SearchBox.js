import React from 'react';
import './searchBox.css';

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        className='searchBox'
        type='search'
        placeholder='Search Robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
