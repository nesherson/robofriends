import React, { useState } from 'react';
import AddItem from './AddItem';

import styles from './customCard.module.css';

const CustomCard = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pictureType, setPictureType] = useState('robot');
  const [renderSvgElement, setRenderSvgElement] = useState(false);

  const tempEmail = email === '' ? name + '@tempMail.com' : email;

  return (
    <div
      onClick={() => setRenderSvgElement(true)}
      className={styles.customCard}
    >
      {renderSvgElement ? (
        <div>
          <h2 className={styles.header}>Add new character</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(name, tempEmail, pictureType);
              setName('');
              setEmail('');
              setRenderSvgElement(false);
            }}
          >
            <label htmlFor='characterName'>Name</label>
            <input
              type='text'
              id='characterName'
              name='characterName'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='characterEmail'>Email</label>
            <input
              type='email'
              id='characterEmail'
              name='characterEmail'
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
        <AddItem color={'rgb(0, 128, 128, 1)'} />
      )}
    </div>
  );
};

export default CustomCard;
