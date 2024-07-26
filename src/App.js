// Arquivo: src/App.tsx
import React from 'react';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import ButtonWhatsapp from './components/Button/ButtonWhatsapp/ButtonWhatsapp';
const App = () => {
    return (React.createElement("div", null,
        React.createElement(Header, null),
        React.createElement(SideMenu, { position: "left" }),
        React.createElement(SideMenu, { position: "right" }),
        React.createElement(MainContent, null),
        React.createElement(Footer, null),
        React.createElement(ButtonWhatsapp, null)));
};
export default App;
