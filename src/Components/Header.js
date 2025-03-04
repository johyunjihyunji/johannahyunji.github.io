import React, { useEffect, useState } from 'react';
import Lopster from '../../static/lopster.png';
import { Link } from 'gatsby';

// Style
import '../style/Home.css';

const Header = () => {
  const [rotation, setRotation] = useState(0); // State to track rotation angle

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Get vertical scroll position
      setRotation(scrollTop / 14); // Adjust the divisor to control rotation speed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up event listener
    };
  }, []);

  return (
    <nav className='LeftNavContainer'>
      <Link to="/" className='LogoContainer'>
        <img
          className='Logo'
          src={Lopster}
          alt="Logo"
          style={{ transform: `rotate(${rotation}deg)` }} // Apply rotation dynamically
        />
      </Link>
      <ul className='Menu'>
        <li><a className='MenuItem' href="https://www.figma.com/proto/uEQv5fIEdHBvAgIPLFQUsx/Portfolio?page-id=643%3A255&node-id=643-256&viewport=-54%2C317%2C0.37&t=DPXVv0wSZ5qJFlzM-1&scaling=min-zoom&content-scaling=fixed">Résumé</a></li>
        <li><a className='MenuItem' href="https://www.linkedin.com/in/johannaleehyunji/">LinkedIn</a></li>
        <li className='MenuItem'>
          <a className='MenuItem' href="/#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
