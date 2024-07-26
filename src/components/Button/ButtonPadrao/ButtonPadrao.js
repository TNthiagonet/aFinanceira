// ButtonPadrao.tsx
import React from 'react';
import './ButtonPadrao.css';
const ButtonPadrao = ({ onClick, children, soundSrc }) => {
    const handleClick = () => {
        onClick();
        if (soundSrc) {
            new Audio(soundSrc).play(); // Reproduz o som ao clicar no botão, se a propriedade soundSrc estiver definida
        }
    };
    return (React.createElement("button", { className: "btn-padrao", onClick: handleClick }, children));
};
export default ButtonPadrao;
