import React from 'react';
import '../styles/Header.css'; 
import logo from '../assets/logo.png';

const Header: React.FC = () => (
  <header className="banner">
    <div className="banner-content">
      <img src={logo} alt="Cine Logo" className="banner-logo" />
      <h1 className="banner-title">Cine Amarillo</h1>
   
    </div>
  </header>
);

export default Header;
