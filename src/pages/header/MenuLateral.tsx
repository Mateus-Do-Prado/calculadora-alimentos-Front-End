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
        
<div className="cabecalho">
    
<div className={`menu ${isOpen ? 'open' : ''}`}>
                <a href="#" className="closebtn" onClick={closeMenu}>&times;</a>
                <a><Link to={"/"}>Início</Link></a>
                <a><Link to={"/lista-cliente"}>Veja nossos clientes</Link></a>
                <a><Link to={"/cadastro-perfume"}>Cadastre um perfume</Link></a>
                <a> <Link to={"/cadastro-cliente"}>Cadastrar um cliente</Link></a>
            </div>

            <div className="main">
                <span className="openbtn" onClick={openMenu}>&#9776; </span>
    
            </div>


  <div className="logo">
    <div className="calculadora"><span className="calculadora_span">Calculadora</span></div>
    <div className="de-aliment-s"><span className="dealiments_span">DE ALIMENTOS</span></div>
  </div>
  <div data-size="Small" data-state="Hover" data-variant="Primary" className="button">
    <div className="button_01"><span className="button_01_span">Sua Conta</span></div>
  </div>
  <div data-size="Small" data-state="Hover" data-variant="Primary" className="button_02">
    <div className="button_03"><span className="button_03_span">Sair</span></div>
  </div>
</div>
        
 
    );
};

export default MenuLateral;

