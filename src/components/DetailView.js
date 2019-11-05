import React from 'react';
import PropTypes from 'prop-types';

const DetailView = ({ photoUrl, name, affiliation, enemies, allies }) => (
  <div>
    {photoUrl && <img src={photoUrl} />}
    {name && <h2>{name}</h2>}
    {affiliation && <span>Affiliation: {affiliation}</span>}
    {enemies && <span>Enemies: {enemies.map(char => `${char} `)}</span>}
    {allies && <span>Allies: {allies.map(char => `${char} `)}</span>}
  </div>

);

DetailView.propTypes = {
  photoUrl: PropTypes.string,
  name: PropTypes.string,
  affiliation: PropTypes.string,
  enemies: PropTypes.array,
  allies: PropTypes.array
};


export default DetailView;