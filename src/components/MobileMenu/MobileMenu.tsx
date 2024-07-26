import React from 'react';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void; // Adiciona a função de callback para fechar o menu
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const handleItemClick = () => {
    onClose(); // Chama a função para fechar o menu
  };

  return (
    <div className={`mobile-menu ${isOpen ? 'show' : ''}`}>
      <ul>
        <li><a href="#home" onClick={handleItemClick}>Início</a></li>
        <li><a href="#about" onClick={handleItemClick}>Sobre</a></li>
        <li><a href="#services" onClick={handleItemClick}>Serviços</a></li>
        <li><a href="#contact" onClick={handleItemClick}>Contato</a></li>
      </ul>
    </div>
  );
};

export default MobileMenu;
