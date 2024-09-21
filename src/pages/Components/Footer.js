import React from 'react';
import styled from 'styled-components';
import LopsterGallery from './LopsterGallary';

const FooterContainer = styled.footer`
  color: #FF1700;
  padding: 20px 0;
  text-align: center;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 16px;
  color: #FF1700;
`;


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <LopsterGallery />
      <FooterText  style={{ fontFamily: "'Inter', sans-serif"}}>
        © {currentYear} Johanna Lee
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;