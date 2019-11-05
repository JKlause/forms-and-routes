import React from 'react';
// import styles from './Footer.css';
import PropTypes from 'prop-types';

const RandomImage = ({ photoUrl, name, handleRandomGet }) => {
  return (
    <>
      <img src={photoUrl} />
      <figcaption>{name}</figcaption>
      <button onClick={handleRandomGet}>Get New Random Character</button>
    </>
  );
};

RandomImage.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleRandomGet: PropTypes.func.isRequired
};


export default RandomImage;
