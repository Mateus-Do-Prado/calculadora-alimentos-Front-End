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
                <a><Link to={"/cadastro-cliente"}>Se Cadastre</Link></a>
            </div>

            <div className="main">
                <span className="openbtn" onClick={openMenu}>&#9776; </span>
    
            </div>


  <div className="logo">
    <div className="calculadora"><span className="calculadora_span">Calculadora</span></div>
    <div className="de-aliment-s"><span className="dealiments_span">DE ALIMENTOS</span></div>
  </div>
  
  <button ><Link className="button_01" to={`/cadastro-cliente`}>Sua Conta</Link></button>
 
  
</div>
        
 
    );
};

export default MenuLateral;

