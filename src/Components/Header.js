// src/Header.js
import React from 'react';
import Lopster from '../../static/lopster.png';
import { Link } from 'gatsby';

// Style
import '../style/Home.css'

const Header = () => {
  return (
    <header className='HeaderContainer'>
      <Link to="/">
        <img className='Logo' src= {Lopster} alt="Logo" />
      </Link>
      <div className='Menu'>
        <a className='MenuItem' href = "https://www.linkedin.com/in/johannaleehyunji/">LinkedIn</a>
        <a className='MenuItem' href = "https://drive.google.com/file/d/19jYAuiv4JhnaoI4WNHnzY0a5nQN8mown/view?usp=sharing">Resume</a>
      </div>
    </header>
  );
};

export default Header;