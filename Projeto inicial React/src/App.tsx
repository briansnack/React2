import React from 'react';
import Soma from './Soma';
// 1 - Um componente DEVE ser nomeado com a primeira letra maiúscula
// 2 - Um componente DEVE ser uma função Ex:function
// 3 - Um componente DEVE retornar APENAS um elemento pai HTML

function App() {
  return (
    <div>
      <Soma />
    </div>
  );
}

// 4 - O componente DEVE ser exportado
export default App;