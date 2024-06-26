import { useState } from "react";
import { Produto } from "../../../models/Produto";
import axios, { Axios, AxiosError } from "axios";

function ProdutoDeletar(){

    const[nome, setNome] = useState("")
    const[descricao, setDescricao] = useState("")
    const[quantidade, setQuantidade] = useState("")
    const[valor, setValor] = useState("")

async function deletarProduto(e: any){
    e.preventDefault();
        const produto : Produto = {
            nome: nome,
            descricao: descricao,
            quantidade: Number(quantidade),
            valor: Number(valor),
        };
          try{
            const response = await axios.delete("http://localhost:5143/produto/deletar", {
               data : produto 
            });
          
          if (response.status === 200 || response.status === 204) {
            setNome("");
            setDescricao("");
            setQuantidade("");
            setValor("");

            alert("Produto deletado com sucesso!");
          } else{
            throw new Error("Falha ao deletar produto");
          }
        } catch(error: any) {
            console.error("Erro ao deletar produto:", error.message);

            alert("Ocorreu um erro ao deletar o produto. Tente novamente.");
        }
    }

    return (
        <div>
            <h1>Deletar Produto</h1>
            <form onSubmit={deletarProduto}>
                <label>Nome:</label>
                <input type="text" value={nome} onChange={(e => setNome(e.target.value))} required />{" "}

                <label>Descrição:</label>
                <input type="text" value={descricao} onChange={(e => setDescricao(e.target.value))} required />{" "}

                <label>Quantidade:</label>
                <input type="text" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} required />{" "}

                <label>Valor:</label>
                <input type="text"  value={valor} onChange={(e => setValor(e.target.value))} required />{" "} 

                <button type="submit">Deletar Produto</button>
            </form>
        </div>
    );
}

export default ProdutoDeletar;