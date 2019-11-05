import React from 'react';
import PropTypes from 'prop-types';
import CharacterListItem from './CharacterListItem';

const CharacterListDisplay = ({ characters, handleCharacterClick }) => {

  const characterElements = characters.map((character) => {

    const characterObj = {
      photoUrl: character.photoUrl,
      name: character.name,
      _id: character._id
    };

    return (<li key={character._id}>
      <CharacterListItem handleCharacterClick={handleCharacterClick} {...characterObj}/>
    </li>);
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
