// MobileMenu.tsx

import React from 'react';
import './MobileMenu.css';

const MobileMenu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'show' : ''}`}>
      <ul>
        <li><a href="#home">Início</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </div>
  );
};

export default MobileMenu;
