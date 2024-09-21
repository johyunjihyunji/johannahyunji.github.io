// src/Header.js
import React from 'react';
import styled from 'styled-components';
import Lopster from '../../../static/lopster.png';
import { Link } from 'gatsby';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-size: 20px;
  fontFamily: "'Inter', sans-serif";
  margin-right: 2vw;
`;

const Logo = styled.img`
  height: 80px; /* Adjust logo size */
`;

const Menu = styled.div`
  display: flex;
  gap: 20px; /* Space between menu items */
`;

const MenuItem = styled.a`
  color: #FF1700;
  text-decoration: none; /* Remove underline */
  font-family: 'Inter', sans-serif;
  
  &:hover {
    text-decoration: underline; /* Add underline on hover */
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src= {Lopster} alt="Logo" />
      </Link>
      <Menu>
        <MenuItem href = "https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1">About</MenuItem>
        <MenuItem href = "https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1">Resume</MenuItem>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;