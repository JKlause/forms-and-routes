import React from 'react';
// import styles from './Footer.css';
import PropTypes from 'prop-types';

const CharacterSearchForm = ({ handleSubmit, handleChange, searchQuery }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="searchQuery" placeholder="Search For A Character" value={searchQuery} onChange={handleChange}></input>
      <button>Search</button>
    </form>
  );
};

CharacterSearchForm.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};


export default CharacterSearchForm;
