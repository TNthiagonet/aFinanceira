import React from 'react';
import './Services.css';
import Lottie from 'lottie-react';
import Card from '../../components/Card/Card'; // Atualizei o nome do componente
import Consorcio from '../../components/Card/img/CONSORCIO.png';
import Financiamento from '../../components/Card/img/FINANCIAMENTO.png';
import Emprestimo from '../../components/Card/img/EMPRESTIMO.png';
import Consultoria from '../../components/Card/img/CONSULTORIA.png';
import animationData from '../../Animations/AnimationServicos.json';
import cardClickSound from '../../Sounds/Click.mp3'; // Adicione o som de clique do cartão
const Services = () => {
    return (React.createElement("section", { id: "services" },
        React.createElement("div", { className: "services-header" },
            React.createElement("h1", null, "Servi\u00E7os")),
        React.createElement("div", { className: "services-animation-container" },
            React.createElement(Lottie, { animationData: animationData, loop: true, autoplay: true, style: { width: '100%', height: 'auto' } })),
        React.createElement("div", { className: "services-header-p" },
            React.createElement("p", null, "Alguns de nossos servi\u00E7os dispon\u00EDveis.")),
        React.createElement("div", { className: "services-card-container" },
            React.createElement(Card, { imageUrl: Consorcio, title: "Cons\u00F3rcio", description: "Im\u00F3veis e Ve\u00EDculos", buttonLabel: "Atendimento", buttonUrl: "https://wa.me/5583981790771", soundSrc: cardClickSound }),
            React.createElement(Card, { imageUrl: Financiamento, title: "Financiamento", description: "Im\u00F3veis e Ve\u00EDculos", buttonLabel: "Atendimento", buttonUrl: "https://wa.me/5583981790771", soundSrc: cardClickSound }),
            React.createElement(Card, { imageUrl: Emprestimo, title: "Empr\u00E9stimo", description: "Consignado, FGTS, Loas...", buttonLabel: "Atendimento", buttonUrl: "https://wa.me/5583981790771", soundSrc: cardClickSound }),
            React.createElement(Card, { imageUrl: Consultoria, title: "Consultoria", description: "Servi\u00E7o especial", buttonLabel: "Atendimento", buttonUrl: "https://wa.me/5583981790771", soundSrc: cardClickSound }))));
};
export default Services;
