import { useEffect, useState } from "react";
import "./styles.css";
import { Produto } from "../../../models/Produto";

function ProdutoListar() {
  const[produtos, setProdutos] = useState<Produto[]>([]);
  useEffect(() => {
    console.log("O componente foi carregado...");

    //FETCH ou AXIOS
    fetch("http://localhost:5143/produto/listar")
      .then((resposta) => resposta.json())
      .then((produtos : Produto[]) => {
        setProdutos(produtos);
      });
  }, []);

  return (
    <div>
      <h1>Listar Produtos</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Quantidade</th>
            <th>Criado Em</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map(produto =>(
          <tr key={produto.id}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>{produto.descricao}</td>
            <td>{produto.valor}</td>
            <td>{produto.quantidade}</td>
            <td>{produto.criadoEm}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProdutoListar;