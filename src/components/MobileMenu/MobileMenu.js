import React from 'react';
import './MobileMenu.css';
const MobileMenu = ({ isOpen, onClose }) => {
    const handleItemClick = () => {
        onClose(); // Chama a função para fechar o menu
    };
    return (React.createElement("div", { className: `mobile-menu ${isOpen ? 'show' : ''}` },
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#home", onClick: handleItemClick }, "In\u00EDcio")),
            React.createElement("li", null,
                React.createElement("a", { href: "#about", onClick: handleItemClick }, "Sobre")),
            React.createElement("li", null,
                React.createElement("a", { href: "#services", onClick: handleItemClick }, "Servi\u00E7os")),
            React.createElement("li", null,
                React.createElement("a", { href: "#contact", onClick: handleItemClick }, "Contato")))));
};
export default MobileMenu;
