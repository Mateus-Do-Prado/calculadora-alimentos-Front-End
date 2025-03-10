import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './Home.tsx';
import Cadastro from './pages/clientes/cadastro.tsx';
import MenuLateral from './pages/header/MenuLateral.tsx';
/*import CadastroPerfume from './CadastroPerfume.tsx';
import CadastroCliente from './CadastroCliente.tsx';
import AppCliente from './AppCliente.tsx';
import AlterarPerfume from './AlterarPerfume.tsx';
import AlterarCliente from './AlterarCliente.tsx';*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <><MenuLateral/><App /></>,
  },
  {
    path: "/cadastro-cliente",
    element: <><MenuLateral/><Cadastro /></>,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);