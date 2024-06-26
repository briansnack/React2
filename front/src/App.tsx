import React from 'react';
  import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
  import CepConsultar from "./components/pages/cep/cep-consultar";
  import ProdutoListar from "./components/pages/produto/produto-listar";
  import ProdutoCadastrar from './components/pages/produto/produto-cadastrar';
  import './App.css';
import ProdutoDeletar from './components/pages/produto/produto-deletar';

const App: React.FC = () => {
  return (
      <BrowserRouter>
          <div className="App">
              <nav>
                  <ul>
                      <li>
                        <Link to="./components/pages/produto/produto-listar">Lista de Produtos</Link>
                      </li>
                      <li>
                        <Link to="./components/pages/produto/produto-cadastrar">Cadastro de Produto</Link>
                      </li>
                      <li>
                        <Link to="./components/pages/produto/produto-deletar">Deletar Produto</Link>
                      </li>
                  </ul>
              </nav>
              <Routes>
                  <Route path="/components/pages/produto/produto-listar" element={<ProdutoListar />} />
                  <Route path="/components/pages/produto/produto-cadastrar" element={<ProdutoCadastrar />} />
                  <Route path="/components/pages/produto/produto-deletar" element={<ProdutoDeletar />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
};

export default App;