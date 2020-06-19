import React, { useState } from 'react';
import Wrapper from './Wrapper';
import './customRobotCard.css';

/*const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};*/

const CustomRobotCard = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [click, setClick] = useState(false);

  return (
    <div className='customCard'>
      <Wrapper click={click} setClick={setClick}>
        <h2>Add new robot</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(name, email);
            setName('');
            setEmail('');
            setClick(false);
          }}
        >
          <label htmlFor='robotName'>Name</label>
          <input
            type='text'
            id='robotName'
            name='robotName'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor='customRobotEmail'>Email</label>
          <input
            type='email'
            id='robotEmail'
            name='robotEmail'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type='submit' value='Submit' />
        </form>
      </Wrapper>
    </div>
  );
};

export default CustomRobotCard;
