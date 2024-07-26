import React from 'react';
import './MainContent.css';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Services from '../../pages/Services/Services';
import Contact from '../../pages/Contact/Contact';
import EstrelaAnimation from '../MoneyAnimation/MoneyAnimation';
const MainContent = () => {
    return (React.createElement("div", { className: "main-container" },
        React.createElement("main", null,
            React.createElement(Home, null),
            React.createElement(About, null),
            React.createElement(Services, null),
            React.createElement(Contact, null)),
        React.createElement(EstrelaAnimation, null)));
};
export default MainContent;
