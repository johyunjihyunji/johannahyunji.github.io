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
        <a className='MenuItem' href = "https://www.figma.com/proto/uEQv5fIEdHBvAgIPLFQUsx/Portfolio?page-id=643%3A255&node-id=643-256&viewport=-54%2C317%2C0.37&t=DPXVv0wSZ5qJFlzM-1&scaling=min-zoom&content-scaling=fixed">Résumé</a>
        <a className='MenuItem' href = "https://www.linkedin.com/in/johannaleehyunji/">LinkedIn</a>
        <a className='MenuItem' href="/#projects">Projects</a>
      </div>
    </header>
  );
};

export default Header;