import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './Home.css'
// Definindo o tipo para Perfumes
type AlimentosType = {
  id:number,
  nome:string,
  categoria:string,
  calorias:string,
  proteinas:string,
  carboidratos:string,
  gorduras:string,
  peso:string,
  data_cadastro:string,
  imagem:string

 
}



function App() {
  const [alimentos, setAlimentos] = useState<AlimentosType[]>([])

  //useEffect(O QUe fazer, Quando Fazer)
   // useEffect para buscar perfumes
  useEffect(()=>{
    fetch("https://calculadora-alimentos-back-end.onrender.com/alimentos")
    .then(resposta=>resposta.json())
    .then(dados=>setAlimentos(dados))
  },[])

  
  function handleExcluir(id:number){
    fetch(`https://calculadora-alimentos-back-end.onrender.com/alimentos/${id}`,{
      method:"DELETE"
    })
    .then(resposta=>{
      if(resposta.status==200){
        alert("Alimento Excluído com sucesso")
        window.location.reload()
      }
      else{
        alert("Erro ao excluir um alimento...")
      }
    })
  }

  return (
    <>  
    <header>
      <div className="cabeçalho-app">
          <ul className='menu-app'>
          <li><Link to={"/"}>Início</Link></li>
          <li><Link to={"/cadastro-alimentos"}>Cadastre um Alimento</Link></li>
          <li> <Link to={"/cadastro-cliente"}>Cadastrar um cliente</Link></li>
          </ul>
        </div>

  </header>


  <h2 className='lista-alimentos'> Todos os Alimentos Cadastrados:</h2>
      <div className="container-alimentos">
        
        {alimentos.map(alim=>{
          return(
            <div key={alim.id} className="alimento-item">
              <h1 className='alimento-nome'>{alim.nome}</h1>
              <img className='imagem-alimento' src={alim.imagem} alt="Imagem do alimento" />
              <p><strong>Categoria:</strong>  {alim.categoria}</p>
              <h4>Dados do Alimento</h4>
              <p><strong>Proteinas:</strong> {alim.proteinas}</p>
              <p><strong>Carboidratos:</strong> {alim.carboidratos}</p>
              <p><strong>Gorduras Totais:</strong> {alim.gorduras}</p>
              <p><strong>Peso do Alimento:</strong> {alim.peso}</p>
              <p><strong>Calorias Totais:</strong> {alim.calorias}</p>
              <h6><strong>Data de Cadastro:</strong> {alim.data_cadastro}</h6>
              <button className='excluir-botao' onClick={()=>{handleExcluir(alim.id)}}>Excluir</button>
              <button ><Link className='Link-botao' to={`/alterar-alimento/${alim.id}`}>Alterar</Link></button>
            </div>
          )
        })}    
      </div>
    </>
  )
}


export default App