
import { Box, Button, Center, Heading, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import nomes from './dadosSorteio';
import logo from './assets/logo1.png'


function App() {

  const [nomeAtual, setNomeAtual] = useState(''); // Nome atual que está sendo exibido
  const [mudando, setMudando] = useState(true); // Flag para controlar a mudança rápida dos nomes

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
    <>
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
        </Box>
      </Center>
    </>

  )
}

export default App;
