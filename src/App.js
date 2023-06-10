import { Box, Button, Center, Heading, Image, Text } from '@chakra-ui/react';
import './App.css';
import { useEffect, useState } from 'react';
import logo from './assets/logo1.png';

function App() {

  //NOMES DOS PARTICIPANTES DO SORTEIO
  const nomes = ['Jerlis', 'Beatriz_ll', 'Carmosadasilva', 'Suzieandre', 'Madalena', 'Luana.sousa.98229',
    'gleycehellensantoscostas', 'Keillagomessilva', 'Cassiane_lima_2310', 'Tatianesilvanava2',
    '_cleisasiqueira', 'eligolveia', 'sandrafontinele2', 'miriamnandes', 'taynarabarbosa60', 'kelynavalima',
    'santos_kelly56', 'biamattosofficial', 'rosangelasilva5766', 'gi_nino', 'mixstoreoficial', 'limap4419',
    'polinne14', 'juniior_silvah7', 'genilda_silva88', 'regi.na983', 'vanda_rb.gomes', 'noeliasilva02kk',
    'sarah.menezws52', 'alinnemarquess', 'hiedanascimentonascimento', 'silvana2015coimbra'
  ];

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
    // <div className="App" style={{background:'pink', }}>
    <Center bg={'#FEF1F9'}>
      <Box h={'100vh'} mt={'15vh'} bg='#FEF1F9'>
        <Center><Image src={logo} w='250px' alt={logo} /></Center>

        <Heading color='#ff006e' my='50px'>Sorteio dos Namorados</Heading>
        <Center>

          <Text color='gray.700' fontSize={'36px'} className="nomes-container">{nomeAtual}</Text>
        </Center>
        <Center>

          {mudando && (
            <Button my='30px' colorScheme='pink' onClick={pararSorteio}>
              Sortear
            </Button>
          )}
        </Center>
      </Box></Center>
    // </div>
  );
}

export default App;
