import React, { useEffect, useState } from 'react';
import Lopster from '../../static/lopster.png';
import { Link } from 'gatsby';

// Style
import '../style/Home.css';

const Header = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setRotation(scrollTop / 14);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className='LeftNavContainer'>
      <div className="topnav">
        <Link to="/" className='LogoContainer'>
          <img
            className='Logo'
            src={Lopster}
            alt="Logo"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </Link>
        <ul className='Menu'>
          <li><a className='MenuItem' href="https://www.figma.com/proto/uEQv5fIEdHBvAgIPLFQUsx/Portfolio?page-id=643%3A255&node-id=643-256&viewport=-54%2C317%2C0.37&t=DPXVv0wSZ5qJFlzM-1&scaling=min-zoom&content-scaling=fixed">Résumé</a></li>
          <li><a className='MenuItem' href="https://www.linkedin.com/in/johannaleehyunji/">LinkedIn</a></li>
          <li className='MenuItem'>
            <a className='MenuItem' href="/#projects">Projects</a>
          </li>
          <li className='MenuItem'>
            <a className='MenuItem' href="/Playground">Playground</a>
          </li>
        </ul>
      </div>
      <button onClick={scrollToTop} className="scroll-to-top-btn">↑</button>
    </nav>
  );
};

export default Header;
