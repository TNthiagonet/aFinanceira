// Arquivo: src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import ButtonWhatsapp from './components/Button/ButtonWhatsapp/ButtonWhatsapp';
import Loading from './components/Loading/Loading';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    React.createElement("div", null,
      isLoading ? (
        React.createElement(Loading, null)
      ) : (
        React.createElement(React.Fragment, null,
          React.createElement(Header, null),
          React.createElement(SideMenu, { position: "left" }),
          React.createElement(SideMenu, { position: "right" }),
          React.createElement(MainContent, null),
          React.createElement(Footer, null),
          React.createElement(ButtonWhatsapp, null)
        )
      )
    )
  );
};

export default App;
