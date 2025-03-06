import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './Home.tsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
/*import CadastroPerfume from './CadastroPerfume.tsx';
import CadastroCliente from './CadastroCliente.tsx';
import AppCliente from './AppCliente.tsx';
import AlterarPerfume from './AlterarPerfume.tsx';
import AlterarCliente from './AlterarCliente.tsx';*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);