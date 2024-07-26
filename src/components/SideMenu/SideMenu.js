import React from 'react';
import './SideMenu.css';
const SideMenu = ({ position }) => {
    return (React.createElement("aside", { className: `side-menu ${position}-menu` }));
};
export default SideMenu;
