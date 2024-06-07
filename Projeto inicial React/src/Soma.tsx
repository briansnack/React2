import React, { useState } from 'react';

// 1 - Exibir o valor do contador no HTML
// 2 - Somar os dois números da caixa de texto e exibir no navegador
function Soma() {

    // Declaração de variável
    const [contador, setContador] = useState(0); 

    function clicar(){
        setContador(contador + 1);
        console.log(contador);
    }

  return (
    <div>
      <label>Número 1: </label>
      <input type="text" /> <br />

      <label>Número 2: </label>
      <input type="text" /> <br />
      
      <button onClick={clicar}>Calcular</button>
    </div>
  );
}

export default Soma;