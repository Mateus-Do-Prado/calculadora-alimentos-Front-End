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
                <a><Link to={"/"}>Início</Link></a>
                <a><Link to={"/lista-cliente"}>Veja nossos clientes</Link></a>
                <a><Link to={"/cadastro-perfume"}>Cadastre um perfume</Link></a>
                <a> <Link to={"/cadastro-cliente"}>Cadastrar um cliente</Link></a>
            </div>

            <div className="main">
                <span className="openbtn" onClick={openMenu}>&#9776; Abrir Menu</span>
    
            </div>
        </div>
    );
};

export default MenuLateral;