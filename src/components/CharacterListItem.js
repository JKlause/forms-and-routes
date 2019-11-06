import React from 'react';
import PropTypes from 'prop-types';

const CharacterListItem = ({ photoUrl, name, _id, handleCharacterClick }) => (
  <div onClick={() => handleCharacterClick(_id)}>
    <img src={photoUrl} />
    <h2>{name}</h2>
  </div>

);

CharacterListItem.propTypes = {
  photoUrl: PropTypes.string,
  name: PropTypes.string,
  _id: PropTypes.string,
  handleCharacterClick: PropTypes.func.isRequired
};


export default CharacterListItem;
