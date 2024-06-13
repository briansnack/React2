import { useState } from "react";
import { Produto } from "./models/Produto";

function ProdutoCadastrar(){

    const[nome, setNome] = useState("")
    const[descricao, setDescricao] = useState("")
    const[quantidade, setQuantidade] = useState("")
    const[valor, setValor] = useState("")

function cadastrarProduto(e: any){
    e.preventDefault();
        const produto : Produto = {
            nome: nome,
            descricao: "Comida",
            quantidade: 150,
            valor : 15,
        };
          
        fetch("http://localhost:5143/produto/cadastrar", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
        })
            .then((resposta) => resposta.json())
            .then((produto : Produto[]) => {
               setNome("");
                
            });
        }

    return (
        <div>
            <h1>Cadastrar Produto</h1>
            <form onSubmit={cadastrarProduto}>
                <label>Nome:</label>
                <input type="text" onChange={(e : any) => setNome(e.target.value)} 
                required
                />{" "}
                {/* <label>Descrição:</label>
                <input type="text" onChange={(e : any) => setDescricao(e.target.value)} 
                required
                />{" "}
                <label>Quantidade:</label>
                <input type="text" onChange={(e : any) => setQuantidade(e.target.value)} 
                required
                />{" "}
                <label>Valor:</label>
                <input type="text" onChange={(e : any) => setValor(e.target.value)} 
                required
                />{" "} */}
                <button type="submit">Cadastrar Produto</button>
            </form>
        </div>
    );
}

export default ProdutoCadastrar;