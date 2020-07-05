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
  const [pictureType, setPictureType] = useState('robot');
  const [click, setClick] = useState(false);

  const tempEmail = email === '' ? name + '@tempMail.com' : email;

  return (
    <div className='customCard'>
      <Wrapper click={click} setClick={setClick}>
        <h2>Add new robot</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(name, tempEmail, pictureType);
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
          <p>Type of picture:</p>
          <label htmlFor='robot'>
            <input
              type='radio'
              id='robot'
              name='pictureType'
              value='robot'
              onChange={(e) => setPictureType(e.target.value)}
            />
            Robot
          </label>
          <label htmlFor='monster'>
            <input
              type='radio'
              id='monster'
              name='pictureType'
              value='monster'
              onChange={(e) => setPictureType(e.target.value)}
            />
            Monster
          </label>
          <label htmlFor='robotHead'>
            <input
              type='radio'
              id='robotHead'
              name='pictureType'
              value='robotHead'
              onChange={(e) => setPictureType(e.target.value)}
            />
            Robot head
          </label>
          <label htmlFor='kittens'>
            <input
              type='radio'
              id='kitten'
              name='pictureType'
              value='kitten'
              onChange={(e) => setPictureType(e.target.value)}
            />
            Kitten
          </label>
          <input type='submit' value='Submit' />
        </form>
      </Wrapper>
    </div>
  );
};

export default CustomRobotCard;
