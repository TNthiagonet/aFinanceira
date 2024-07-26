import React, { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import Lottie from 'lottie-react';
import animationData from '../../Animations/af.json'; // Ajuste o caminho conforme necessário
import './Header.css';
const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    const closeMenu = () => {
        setMobileMenuOpen(false);
    };
    return (React.createElement("header", null,
        React.createElement("nav", { className: "top-nav" },
            React.createElement("div", { className: "left" },
                React.createElement(Lottie, { animationData: animationData, style: { width: '40px', height: '40px',
                        filter: 'brightness(1.1) contrast(1.1)' } }),
                React.createElement("span", { className: "logo-text" }, "A Financeira")),
            React.createElement("div", { className: "center" }),
            React.createElement("div", { className: "right" },
                React.createElement("ul", { className: `menu ${mobileMenuOpen ? 'open' : ''}` },
                    React.createElement("li", null,
                        React.createElement("a", { href: "#home" }, "In\u00EDcio")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#about" }, "Sobre")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#services" }, "Servi\u00E7os")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#contact" }, "Contato"))),
                React.createElement("div", { className: "hamburger-menu", onClick: toggleMenu }, mobileMenuOpen ? '✕' : '☰'))),
        React.createElement(MobileMenu, { isOpen: mobileMenuOpen, onClose: closeMenu })));
};
export default Header;
