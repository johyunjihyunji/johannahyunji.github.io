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
        <Link className='MenuItem' to="/About">About</Link>
        <a className='MenuItem' href = "https://drive.google.com/file/d/1rrVn9x26NXWycQwnkG_05h7U3Iji4wvZ/view?usp=sharing">Resume</a>
      </div>
    </header>
  );
};

export default Header;