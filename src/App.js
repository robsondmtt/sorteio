import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const nomes = ['João', 'Maria', 'Pedro', 'Ana', 'Carlos']; // Array de nomes pré-definidos
  const [sorteado, setSorteado] = useState(null); // Nome sorteado
  const [mudando, setMudando] = useState(false); // Flag para controlar a mudança rápida dos nomes

 // Função para sortear um nome aleatório do array
  const sortearNome = () => {
    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    setSorteado(nomes[indiceSorteado]);
  };

  // UseEffect para controlar a mudança rápida dos nomes
  useEffect(() => {
    let intervalId;

    if (mudando) {
      intervalId = setInterval(sortearNome, 100);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [mudando]);

  return (
    <div className="App">
      <h1>Sorteio de Nomes</h1>
      <div className="nomes-container">{mudando ? 'Sorteando...' : sorteado}</div>
      <button onClick={() => setMudando(!mudando)}>
        {mudando ? 'Parar' : 'Sortear'}
      </button>

    </div>
  );
}

export default App;
