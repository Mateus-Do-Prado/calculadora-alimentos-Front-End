import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Cadastro: React.FC = () => {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [idade, setIdade] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleForm = async (event: FormEvent) => {
        event.preventDefault();
        console.log("Tentei cadastrar um novo cliente !!!");
        
        const cliente = {
            id,
            nome,
            sobrenome,
            idade,
            email,
            senha,
            classe: 'cliente', // Adicionando o tipo de usuário
        };

        const response = await fetch('https://calculadora-alimentos-back-end.onrender.com/clientes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cliente),
        });

        if (response.ok) {
            alert('Cadastro Realizado!!!');
            navigate('/'); // Navega para a lista de clientes após o cadastro
        } else {
            alert('Erro ao cadastrar Cliente.');
        }
    };

    return (
        <>

            <div className="tela-cliente">
                <h1>Cadastro do Cliente:</h1>
                <form className="cliente-cadastro" onSubmit={handleForm}>
                    <div className="container-cadastro-cliente">
                        <div>
                            <label htmlFor="id"><strong>Crie um ID:</strong></label>
                            <input type="text" name="id" onChange={(e: ChangeEvent<HTMLInputElement>) => setId(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="nome"><strong>Insira seu Nome:</strong></label>
                            <input type="text" name="nome" onChange={(e: ChangeEvent<HTMLInputElement>) => setNome(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="sobrenome"><strong>Insira seu Sobrenome:</strong></label>
                            <input type="text" name="sobrenome" onChange={(e: ChangeEvent<HTMLInputElement>) => setSobrenome(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="idade"><strong>Insira sua Idade:</strong></label>
                            <input type="number" name="idade" onChange={(e: ChangeEvent<HTMLInputElement>) => setIdade(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="email"><strong>Insira seu Email:</strong></label>
                            <input type="email" name="email" onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="senha"><strong>Insira sua Senha:</strong></label>
                            <input type="password" name="senha" onChange={(e: ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)} required />
                        </div>
                        <div>
                            <input className="botao-cliente" type="submit" value="Finalizar Cadastro" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Cadastro;