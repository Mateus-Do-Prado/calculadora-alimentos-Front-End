import { Link } from 'react-router-dom'
import { useState } from 'react'

import './MenuLateral.css'
function MenuLateral() {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(true);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <a href="#" className="closebtn" onClick={closeMenu}>&times;</a>
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Serviços</a>
                <a href="#">Contato</a>
            </div>

            <div className="main">
                <span className="openbtn" onClick={openMenu}>&#9776; Abrir Menu</span>
    
            </div>
        </div>
    );
};

export default MenuLateral;