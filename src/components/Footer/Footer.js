// Arquivo: src/components/Footer/Footer.tsx
import React, { useEffect, useState } from 'react';
import './Footer.css';
const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        function handleScroll() {
            const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
            setIsVisible(isBottom);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // Definir a constante currentYear
    const currentYear = new Date().getFullYear();
    return (React.createElement("footer", { className: `footer ${isVisible ? 'visible' : ''}` },
        React.createElement("div", { className: "container" },
            React.createElement("p", null,
                "\u00A9 ",
                currentYear,
                " ",
                React.createElement("a", { className: "A Financeira" }, "Copyright | "),
                "A Financeira ",
                React.createElement("a", { href: "https://thiagonet.com", className: "developer" })))));
};
export default Footer;
