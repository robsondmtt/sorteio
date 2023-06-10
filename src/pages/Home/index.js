import React, { useEffect, useState } from 'react'
import nomes from '../../dadosSorteio';
import { Box, Button, Center, Heading, Image, Text } from '@chakra-ui/react';
import logo from '../../assets/logo1.png'


 export function Home()  {
  


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
  
        {/* <Button onClick={onOpen}>Cadastrar</Button>
  
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Cadastrar Nomes</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              teste
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Fechar
              </Button>
              <Button variant='ghost'>Adicionar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal> */}
      </>
    );
  
}
