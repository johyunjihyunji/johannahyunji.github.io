import React from 'react';
import LopsterGallery from './LopsterGallary';
import { useState, useEffect, useRef } from 'react';

// Style
import '../style/Home.css'


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [locations, setLocations] = useState(['Los Angeles, CA']);
  const mountRef = useRef(null);
  const modelRef = useRef(null);
  
  useEffect(() => {
    const allLocations = ['Los Angeles, CA', 'Seoul, Korea', 'Vientiane, Laos', 'Berkeley, CA', 'Where Now ?'];
      
    const interval = setInterval(() => {
      setLocations((prevLocations) => {
        const currentIndex = prevLocations.length;
        if (currentIndex < allLocations.length) {
          return [...prevLocations, allLocations[currentIndex]];
        }
        return prevLocations;
      });
    }, 2000);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className='FooterContainer'>
      <LopsterGallery />
      <p className ='FooterText'>
        © {currentYear} Johanna Lee
      </p>
      <br>
      </br>
      <p className ='FooterText2'>
        design and coded by Jo

      <br />
      <div className="bottom-text" style={{ color: '#282828' }}>
          based in
          <br/> 
          {locations.map((location, index) => (
          <React.Fragment key={index}>
          <span 
            className={`location ${index < locations.length - 1 ? 'crossed' : ' '} ${
               index === locations.length - 1 && location === 'Where Now ?' ? 'red-question-mark' : '' }`}>
               {location}
              </span>
              {index < locations.length - 1 && <span className="space">&nbsp; &nbsp;</span>}
              </React.Fragment>
          ))}
      </div>
      </p>
    </footer>
  );
};

export default Footer;