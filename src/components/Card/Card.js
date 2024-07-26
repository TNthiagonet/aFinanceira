import React, { useRef, useEffect } from 'react';
import './Card.css';
const Card = ({ imageUrl, title, description, buttonLabel, buttonUrl, soundSrc, className, id, style, onClick, }) => {
    const cardRef = useRef(null);
    const handleButtonClick = (e) => {
        e.preventDefault(); // Previna o comportamento padrão do link
        const audio = new Audio(soundSrc);
        audio.play();
        window.open(buttonUrl, '_blank');
    };
    const cardEffect = (event) => {
        const card = cardRef.current;
        if (card) {
            const cardRect = card.getBoundingClientRect();
            const centerX = cardRect.left + cardRect.width / 2;
            const centerY = cardRect.top + cardRect.height / 2;
            const positionX = event.clientX - centerX;
            const positionY = event.clientY - centerY;
            const rotateX = ((+1) * 15 * positionY / (cardRect.height / 2)).toFixed(2);
            const rotateY = ((-1) * 15 * positionX / (cardRect.width / 2)).toFixed(2);
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    };
    const cardBack = () => {
        const card = cardRef.current;
        if (card) {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
            cardTransition();
        }
    };
    const cardTransition = () => {
        const card = cardRef.current;
        if (card) {
            clearTimeout(card.transitionId);
            card.style.transition = 'transform 300ms ease';
            card.transitionId = window.setTimeout(() => {
                card.style.transition = '';
            }, 300);
        }
    };
    const cardEnter = () => {
        cardTransition();
    };
    useEffect(() => {
        const card = cardRef.current;
        if (card) {
            card.addEventListener('mousemove', cardEffect);
            card.addEventListener('mouseleave', cardBack);
            card.addEventListener('mouseenter', cardEnter);
        }
        return () => {
            if (card) {
                card.removeEventListener('mousemove', cardEffect);
                card.removeEventListener('mouseleave', cardBack);
                card.removeEventListener('mouseenter', cardEnter);
            }
        };
    }, []);
    return (React.createElement("div", { ref: cardRef, className: `card ${className}`, style: style, id: id, onClick: onClick },
        React.createElement("img", { src: imageUrl, alt: "Card", className: "card-image" }),
        React.createElement("div", { className: "card-content" },
            React.createElement("h2", { className: "card-title" }, title),
            React.createElement("p", { className: "card-description" }, description),
            React.createElement("a", { href: buttonUrl, target: "_blank", className: "card-button", onClick: handleButtonClick }, buttonLabel))));
};
export default Card;
