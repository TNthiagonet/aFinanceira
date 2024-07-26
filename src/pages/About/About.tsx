import React from 'react';
import './About.css';
import Lottie from 'lottie-react';
import animationData from '../../Animations/AnimationAbout.json';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-animation-container">
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ maxWidth: '80%', height: 'auto' }}
        />
      </div>
      <div className="about-content">
        <h1 className="about-title">Sobre Nós</h1>
        <p className="about-description">
          Nossa missão é proporcionar soluções financeiras que promovam crescimento e estabilidade para nossos clientes. Com uma equipe de especialistas dedicados, oferecemos serviços personalizados que atendem às suas necessidades financeiras específicas.
        </p>
        <p className="about-description2">
          Nossa abordagem combina análise profunda, inovação e tecnologia de ponta para entregar resultados consistentes e positivos. Estamos comprometidos em construir relacionamentos duradouros, fornecendo consultoria estratégica e suporte contínuo para alcançar seus objetivos financeiros com confiança.
        </p>
      </div>
    </section>
  );
};

export default About;
