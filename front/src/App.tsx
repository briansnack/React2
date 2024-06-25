import React from 'react';
  import CepConsultar from "./components/pages/cep/cep-consultar";
  import ProdutoListar from "./components/pages/produto/produto-listar";
  import ProdutoCadastrar from './components/pages/produto/produto-cadastrar';
function App() {
  return (
    <><ProdutoCadastrar></ProdutoCadastrar>
    <ProdutoListar></ProdutoListar></>
  );
}

export default App;