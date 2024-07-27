import React, { useRef } from 'react';
import './Contact.css';
import Lottie from 'lottie-react';
import animationData from '../../Animations/AnimationContact.json';
import emailHoverSound from '../../Sounds/Email.mp3';
import telefoneHoverSound from '../../Sounds/Telefone.mp3';
import facebookHoverSound from '../../Sounds/Facebook.mp3';
import twitterHoverSound from '../../Sounds/Twitter.mp3';
import instagramHoverSound from '../../Sounds/Instagram.mp3';
import FacebookIcon from "../../img/Social/Facebook.png";
import TwitterIcon from "../../img/Social/X.png";
import InstagramIcon from "../../img/Social/Instagram.png";
import PhoneIcon from "../../img/Social/Viber.png";
import EmailIcon from "../../img/Social/Email.png";
const Contact = () => {
    const emailRef = useRef(null);
    const telefoneRef = useRef(null);
    const facebookRef = useRef(null);
    const twitterRef = useRef(null);
    const instagramRef = useRef(null);
    const handleEmailClick = () => {
        window.location.href = 'mailto:contato@afinanceira.com.br';
    };
    const handleHoverSound = (sound, ref) => {
        if (ref.current) {
            const audio = new Audio(sound);
            audio.volume = 0.5;
            audio.play();
            ref.current.addEventListener('mouseleave', () => {
                audio.pause();
                audio.currentTime = 0;
            });
        }
    };
    const handlePhoneClick = () => {
        window.location.href = 'tel:11944668219';
    };
    return (React.createElement("section", { id: "contact" },
        React.createElement("div", { className: "contact-content" },
            React.createElement("div", { className: "contact-header" },
                React.createElement("h1", null, "Contato"),
                React.createElement("p", null, "Entre em contato por whatsapp, email, telefone, facebook, twitter ou instagram.")),
            React.createElement("div", { className: "contact-animations" },
                React.createElement(Lottie, { animationData: animationData, loop: true, autoplay: true, style: { width: '70%', height: 'auto' } })),
            React.createElement("div", { className: "contact-icons" },
                React.createElement("a", { href: "mailto:contato@afinanceira.com.br", target: "_blank", rel: "noopener noreferrer", onMouseEnter: () => handleHoverSound(emailHoverSound, emailRef), onClick: handleEmailClick, ref: emailRef },
                    React.createElement("img", { src: EmailIcon, className: "contact-icon", alt: "Email" })),
                React.createElement("a", { href: "tel:+11944668219", target: "_blank", rel: "noopener noreferrer", onMouseEnter: () => handleHoverSound(telefoneHoverSound, telefoneRef), onClick: handlePhoneClick, ref: telefoneRef },
                    React.createElement("img", { src: PhoneIcon, className: "contact-icon", alt: "Telefone" })),
                React.createElement("a", { href: "https://www.facebook.com/", target: "_blank", rel: "noopener noreferrer", onMouseEnter: () => handleHoverSound(facebookHoverSound, facebookRef), ref: facebookRef },
                    React.createElement("img", { src: FacebookIcon, className: "contact-icon", alt: "Facebook" })),
                React.createElement("a", { href: "https://twitter.com/", target: "_blank", rel: "noopener noreferrer", onMouseEnter: () => handleHoverSound(twitterHoverSound, twitterRef), ref: twitterRef },
                    React.createElement("img", { src: TwitterIcon, className: "contact-icon", alt: "Twitter" })),
                React.createElement("a", { href: "https://www.instagram.com/afinanceira.com.br", target: "_blank", rel: "noopener noreferrer", onMouseEnter: () => handleHoverSound(instagramHoverSound, instagramRef), ref: instagramRef },
                    React.createElement("img", { src: InstagramIcon, className: "contact-icon", alt: "Instagram" }))))));
};
export default Contact;
