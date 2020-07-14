import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        style={{
          padding: '12px',
          width: '250px',
          height: '55px',
          borderRadius: '4px',
          border: '2px solid #80ffbf',
          backgroundColor: '#ccf5ff',
          fontSize: '1.05rem',
          marginBottom: '10px',
        }}
        type='search'
        placeholder='Search Robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
