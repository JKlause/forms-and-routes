import React from 'react';
import {
  Link
} from 'react-router-dom';
import styles from './Header.css';

const Header = () => (
  <header className={styles.Header}>
    <h1>The Last Airbender Character</h1>
    <nav>
      <Link to="/">Home Page</Link>
      <Link to="/listpage">Character List</Link>
    </nav>
  </header>
);



export default Header;
