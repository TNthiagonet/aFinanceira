// Home.tsx
import React from 'react';
import './Home.css';
import Lottie from 'lottie-react';
import animationData from '../../Animations/AnimationHome.json'; // Ajuste o caminho conforme necessário
import ButtonPadrao from '../../components/Button/ButtonPadrao/ButtonPadrao'; // Importando o componente ButtonPadrao
import menuOpenSound from '../../Sounds/Click.mp3'; // Importando o som
const Home = () => {
    const handleNavigateToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (React.createElement("section", { id: "home", className: "home-section" },
        React.createElement("div", { className: "home-content" },
            React.createElement("h1", { className: "home-title" }, "Ol\u00E1!"),
            React.createElement("p", { className: "home-description" },
                "Bem-vindo \u00E0 A Financeira! ",
                React.createElement("br", null),
                "Somos uma empresa especializada em solu\u00E7\u00F5es financeiras ",
                React.createElement("br", null),
                "dedicada a transformar suas ideias em realidade. ",
                React.createElement("br", null),
                "Oferecemos servi\u00E7os como cons\u00F3rcio e financiamentos de im\u00F3veis e ve\u00EDculos, al\u00E9m de empr\u00E9stimos."),
            React.createElement(ButtonPadrao, { onClick: handleNavigateToAbout, soundSrc: menuOpenSound }, "Sobre n\u00F3s"),
            " "),
        React.createElement("div", { className: "animation-container" },
            React.createElement(Lottie, { animationData: animationData, loop: true, autoplay: true, style: { width: '100%', height: 'auto' } }))));
};
export default Home;
