import React from 'react';
import PropTypes from 'prop-types';

const CharacterListItem = ({ photoUrl, name, _id, handleCharacterClick }) => (
  <div onClick={() => handleCharacterClick(_id)}>
    <img src={photoUrl} />
    <figcaption>{name}</figcaption>
  </div>

);

CharacterListItem.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  _id: PropTypes.object.isRequired,
  handleCharacterClick: PropTypes.func.isRequired
};


export default CharacterListItem;
