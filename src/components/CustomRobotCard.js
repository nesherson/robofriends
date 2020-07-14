import React, { useState } from 'react';
import styles from './customRobotCard.module.css';

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
    <div onClick={() => setClick(true)} className={styles.customCard}>
      {click ? (
        <div>
          <h2>Add new character</h2>
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
        </div>
      ) : (
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
            <title>ionicons-v5-a</title>
            <path
              d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z'
              style={{
                fill: 'none',
                stroke: '#000',
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
                stroke: '#000',
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
                stroke: '#000',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '32px',
              }}
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default CustomRobotCard;
