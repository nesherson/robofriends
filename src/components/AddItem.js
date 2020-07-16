import React from 'react';

const AddItem = ({ color }) => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='256'
        height='256'
        viewBox='0 0 512 512'
      >
        <path
          d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z'
          style={{
            fill: 'none',
            stroke: color,
            strokeMiterlimit: '10',
            strokeWidth: '32px',
          }}
        />
        <line
          x1='256'
          y1='176'
          x2='256'
          y2='336'
          style={{
            fill: 'none',
            stroke: color,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
        <line
          x1='336'
          y1='256'
          x2='176'
          y2='256'
          style={{
            fill: 'none',
            stroke: color,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '32px',
          }}
        />
      </svg>
    </div>
  );
};

export default AddItem;
