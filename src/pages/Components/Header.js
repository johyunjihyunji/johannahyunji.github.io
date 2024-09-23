// src/Header.js
import React from 'react';
import Lopster from '../../../static/lopster.png';
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
        <a className='MenuItem' href = "https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1">About</a>
        <a className='MenuItem' href = "https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1">Resume</a>
      </div>
    </header>
  );
};

export default Header;