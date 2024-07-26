// Loading.tsx
import React from 'react';
import Lottie from 'lottie-react';
import tnLogoAnimation from '../../Animations/af.json';
import './Loading.css';
const Loading = () => {
    return (React.createElement("div", { className: 'loader_container' },
        React.createElement(Lottie, { animationData: tnLogoAnimation, className: 'loader', style: { width: '150px', height: '150px' } })));
};
export default Loading;
