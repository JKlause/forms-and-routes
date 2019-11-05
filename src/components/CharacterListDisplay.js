import React from 'react';
// import styles from './Footer.css';
import PropTypes from 'prop-types';
import CharacterListItem from './CharacterListItem';

const CharacterListDisplay = ({ characters, handleCharacterClick }) => {
  
  const characterElements = characters.map((character, index) => {
    <li key={`${index}-${character.photoUrl}`}>
      <CharacterListItem handleCharacterClick={handleCharacterClick} {...character}/>
    </li>
  });
  
  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {characterElements}
      </ul>
    </div>
  );
};

CharacterListDisplay.propTypes = {
  characters: PropTypes.array.isRequired,
  handleCharacterClick: PropTypes.func.isRequired
};


export default CharacterListDisplay;
