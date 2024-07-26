import React, { useState } from 'react';
import './Navbar.css';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (React.createElement("nav", { className: "navbar" },
        React.createElement("ul", { className: `menu ${isOpen ? 'open' : ''}` },
            React.createElement("li", null,
                React.createElement("a", { href: "#home" }, "In\u00EDcio")),
            React.createElement("li", null,
                React.createElement("a", { href: "#about" }, "Sobre")),
            React.createElement("li", null,
                React.createElement("a", { href: "#services" }, "Servi\u00E7os")),
            React.createElement("li", null,
                React.createElement("a", { href: "#contact" }, "Contato"))),
        React.createElement("div", { className: "hamburger-menu", onClick: toggleMenu }, isOpen ? '✕' : '☰')));
};
export default Navbar;
