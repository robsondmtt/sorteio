import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const nomes = ['João', 'Maria', 'Pedro', 'Ana', 'Carlos']; // Array de nomes pré-definidos
  const [nomeAtual, setNomeAtual] = useState(''); // Nome atual que está sendo exibido
  const [mudando, setMudando] = useState(true); // Flag para controlar a mudança rápida dos nomes

 // UseEffect para controlar a mudança rápida dos nomes
 useEffect(() => {
  let intervalId;

  if (mudando) {
    intervalId = setInterval(() => {
      const indiceSorteado = Math.floor(Math.random() * nomes.length);
      setNomeAtual(nomes[indiceSorteado]);
    }, 100);
  }

  return () => {
    clearInterval(intervalId);
  };
}, [mudando, nomes]);

// Função para parar a mudança dos nomes
const pararSorteio = () => {
  setMudando(false);
};

  return (
    <div className="App">
      <h1>Sorteio de Nomes</h1>
      <div className="nomes-container">{nomeAtual}</div>
      {mudando && (
        <button onClick={pararSorteio}>
          Parar
        </button>
      )}
    </div>
  );
}

export default App;
