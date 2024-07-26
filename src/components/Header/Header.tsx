import React, { useState } from 'react';
import './Header.css';
import MobileMenu from '../MobileMenu/MobileMenu';
import Lottie from 'lottie-react';
import animationData from '../../Animations/af.json'; // Ajuste o caminho conforme necessário

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header>
      <nav className="top-nav">
        <div className="left">
          {/* Substitua a imagem estática pela animação Lottie */}
          <Lottie
            animationData={animationData}
            style={{ width: '40px', height: '40px' }} // Ajuste o tamanho conforme necessário
          />
          <span className="logo-text">A Financeira</span>
        </div>
        <div className="center">
          {/* Espaço vazio */}
        </div>
        <div className="right">
          <ul className={`menu ${mobileMenuOpen ? 'open' : ''}`}>
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
          <div className="hamburger-menu" onClick={toggleMenu}>
            {mobileMenuOpen ? '✕' : '☰'}
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={mobileMenuOpen} />
    </header>
  );
};

export default Header;
