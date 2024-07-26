// Arquivo: src/components/Footer/Footer.tsx

import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer: React.FC = () => {
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

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <p>&copy; {currentYear} <a className="A Financeira">Copyright | </a>A Financeira <a href="https://thiagonet.com" className="developer"></a></p>
      </div>
    </footer>
  );
};

export default Footer;
