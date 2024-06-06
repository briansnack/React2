import { useEffect, useState } from "react";
import "./styles.css";
import { Endereco } from "./models/Endereco";

//Consultar os produtos da API e exibir na tela
// - Resolver o problema de CORS (API)
// - Como exibir uma array na tela utilizando React

function CepConsultar() {

  const[logradouro, setLogradouro] = useState("");
  const[bairro, setBairro] = useState("");
  const[uf, setUf] = useState("");
  const[localidade, setLocalidade] = useState("");

  //Executar algum código no carregamento do componente
  useEffect(() => {
    console.log("O componente foi carregado...");
    carregarCep();
  }, []);

  function carregarCep (){
     //FETCH ou AXIOS
     fetch("https://viacep.com.br/ws/80020010/json/")
     .then((resposta) => resposta.json())
     .then((endereco : Endereco) => {
      setLogradouro(endereco.logradouro);
      setBairro(endereco.bairro);
      setUf(endereco.uf);
      setLocalidade(endereco.localidade);
     });
 }

  return (
    <div>
      <h1>Consultar CEP</h1>
      <p>{logradouro}</p> <br />
      <input type="text" value={bairro}/> <br />
      <button>{localidade}</button> <br />  
      <h2>{uf}</h2>
    </div>
  );
}

export default CepConsultar;