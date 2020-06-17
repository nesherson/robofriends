import React, { useState } from 'react';
import './customRobotCard.css';

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};

const CustomRobotCard = ({ onSubmit }) => {
  const name = useInputValue('');
  return (
    <div className='customCard'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(name.value);
        }}
      >
        <label htmlFor='customRobotName'>Name</label>
        <input
          type='text'
          id='customRobotName'
          name='customRobotName'
          {...name}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default CustomRobotCard;
