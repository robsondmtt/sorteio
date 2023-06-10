import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const nomes = ['Jerlis', 'Beatriz_ll', 'Carmosadasilva', 'Suzieandre', 'Madalena','Luana.sousa.98229',
                 'gleycehellensantoscostas','Keillagomessilva','Cassiane_lima_2310','Tatianesilvanava2',
                 '_cleisasiqueira','eligolveia','sandrafontinele2','miriamnandes','taynarabarbosa60','kelynavalima',
                 'santos_kelly56','biamattosofficial','rosangelasilva5766','gi_nino','mixstoreoficial','limap4419',
                 'polinne14','juniior_silvah7','genilda_silva88','regi.na983','vanda_rb.gomes','noeliasilva02kk',
                 'sarah.menezws52','alinnemarquess','hiedanascimentonascimento','silvana2015coimbra'
                ]; // Array de nomes pré-definidos
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
