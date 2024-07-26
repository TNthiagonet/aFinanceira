import React from 'react';
import './Services.css';
import Lottie from 'lottie-react';
import Card from '../../components/Card/Card'; // Atualizei o nome do componente
import Consorcio  from '../../components/Card/img/CONSORCIO.png';
import Financiamento from '../../components/Card/img/FINANCIAMENTO.png';
import Emprestimo from '../../components/Card/img/EMPRESTIMO.png'
import Consultoria from '../../components/Card/img/CONSULTORIA.png';
import animationData from '../../Animations/AnimationServicos.json';
import cardClickSound from '../../Sounds/Click.mp3'; // Adicione o som de clique do cartão

const Services: React.FC = () => {
  return (
    <section id="services">
      <div className="services-header">
        <h1>Serviços</h1>
      </div>
      <div className="services-animation-container">
        <Lottie animationData={animationData} loop autoplay style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className="services-header-p">
        <p>Alguns de nossos serviços disponíveis.</p>
      </div>
      <div className="services-card-container">
        <Card
          imageUrl={Consorcio}
          title="Consórcio"
          description="Imóveis e Veículos"
          buttonLabel="Atendimento"
          buttonUrl="https://wa.me/5583981790771"
          soundSrc={cardClickSound}
        />

        <Card
          imageUrl={Financiamento}
          title="Financiamento"
          description="Imóveis e Veículos"
          buttonLabel="Atendimento"
          buttonUrl="https://wa.me/5583981790771"
          soundSrc={cardClickSound}
        />

        <Card
          imageUrl={Emprestimo}
          title="Empréstimo"
          description="Consignado, FGTS, Loas..."
          buttonLabel="Atendimento"
          buttonUrl="https://wa.me/5583981790771"
          soundSrc={cardClickSound}
        />

        <Card
          imageUrl={Consultoria}
          title="Consultoria"
          description="Serviço especial"
          buttonLabel="Atendimento"
          buttonUrl="https://wa.me/5583981790771"
          soundSrc={cardClickSound}
        />
      </div>
    </section>
  );
};

export default Services;
