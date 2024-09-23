import React from 'react';
import LopsterGallery from './LopsterGallary';

// Style
import '../style/Home.css'


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='FooterContainer'>
      <LopsterGallery />
      <p className ='FooterText'  style={{ fontFamily: "'Inter', sans-serif"}}>
        © {currentYear} Johanna Lee
      </p>
    </footer>
  );
};

export default Footer;