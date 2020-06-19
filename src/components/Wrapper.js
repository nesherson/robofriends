import React from 'react';

const Wrapper = ({ children, click, setClick }) => {
  return (
    <div style={{ height: '100%' }} onClick={() => setClick(true)}>
      {click ? children : <h2>Add me!</h2>}
    </div>
  );
};

export default Wrapper;
