import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  color: #FF1700;
  padding: 20px 0;
  text-align: center;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 16px;
  color: #FF1700;
`;

const Link = styled.a`
  color: #FF1700;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterText  style={{ fontFamily: "'Inter', sans-serif"}}>
        © {currentYear} Johanna Lee
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;