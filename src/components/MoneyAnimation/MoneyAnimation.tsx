import React from 'react';
import Lottie from 'lottie-react';
import './MoneyAnimation.scss';
import bg01 from '../../Animations/background/Money.json';
import bg02 from '../../Animations/background/Money.json';
import bg03 from '../../Animations/background/Money.json';
import bg04 from '../../Animations/background/Money.json';
import bg05 from '../../Animations/background/Money.json';
import bg06 from '../../Animations/background/Money.json';
import bg07 from '../../Animations/background/Money.json';
import bg08 from '../../Animations/background/Money.json';
import bg09 from '../../Animations/background/Money.json';
import bg10 from '../../Animations/background/Money.json';
import bg11 from '../../Animations/background/Money.json';
import bg12 from '../../Animations/background/Money.json';
import bg13 from '../../Animations/background/Money.json';
import bg14 from '../../Animations/background/Money.json';
import bg15 from '../../Animations/background/Money.json';

const animations = [
  bg01,
  bg02,
  bg03,
  bg04,
  bg05,
  bg06,
  bg07,
  bg08,
  bg09,
  bg10,
  bg11,
  bg12,
  bg13,
  bg14,
  bg15,
];

const EstrelaAnimation: React.FC = () => {
  return (
    <div className="circles">
      <ul>
        {animations.map((animation, index) => (
          <li key={index}>
            <div className="lottie-container">
              <Lottie
                animationData={animation}
                loop
                autoplay
                style={{ width: '50%', height: '50%' }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EstrelaAnimation;
