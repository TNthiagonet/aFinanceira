import React from 'react';
import './About.css';
import Lottie from 'lottie-react';
import animationData from '../../Animations/AnimationAbout.json';
const About = () => {
    return (React.createElement("section", { id: "about", className: "about-section" },
        React.createElement("div", { className: "about-animation-container" },
            React.createElement(Lottie, { animationData: animationData, loop: true, autoplay: true, style: { maxWidth: '80%', height: 'auto' } })),
        React.createElement("div", { className: "about-content" },
            React.createElement("h1", { className: "about-title" }, "Sobre N\u00F3s"),
            React.createElement("p", { className: "about-description" }, "Nossa miss\u00E3o \u00E9 proporcionar solu\u00E7\u00F5es financeiras que promovam crescimento e estabilidade para nossos clientes. Com uma equipe de especialistas dedicados, oferecemos servi\u00E7os personalizados que atendem \u00E0s suas necessidades financeiras espec\u00EDficas."),
            React.createElement("p", { className: "about-description2" }, "Nossa abordagem combina an\u00E1lise profunda, inova\u00E7\u00E3o e tecnologia de ponta para entregar resultados consistentes e positivos. Estamos comprometidos em construir relacionamentos duradouros, fornecendo consultoria estrat\u00E9gica e suporte cont\u00EDnuo para alcan\u00E7ar seus objetivos financeiros com confian\u00E7a."))));
};
export default About;
