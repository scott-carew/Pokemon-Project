import React, { useState, useEffect } from 'react'
import { getPokemonData, getPokemonList } from '../apiClient'
import Welcome from './Welcome'
import Pokemon from './Pokemon'
import PokeCard from './PokeCard'
import {
  Button,
  VStack,
  Spacer,
  Box,
  Center,
  Image,
  Input,
} from '@chakra-ui/react'

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [pokeCardInfo, setPokeCardInfo] = useState()

  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=80?')
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()

  useEffect(() => {
    getPokemonList(url)
      .then((pokemonList) => {
        setNextUrl(pokemonList.next)
        setPrevUrl(pokemonList.previous)
        console.log(nextUrl)
        return pokemonList
      })
      .then((pokemonList) =>
        Promise.all(
          pokemonList.results.map((pokemon) => getPokemonData(pokemon))
        )
      )
      .then((pokemonData) => setPokemonData(pokemonData))
      .catch((err) => {
        console.error(err.message)
      })
  }, [url])

  function getNextUrl(nextUrl) {
    setUrl(nextUrl)
  }
  function getPrevUrl(prevUrl) {
    setUrl(prevUrl)
  }

  return (
    <>
      <Box
        w="100%"
        bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
      >
        <VStack>
          <Spacer />
          <Welcome />
          <PokeCard data={pokeCardInfo} />
          {console.log(pokemonData)}
          <Pokemon
            pokemonData={pokemonData}
            pokeInfo={(poke) => setPokeCardInfo(poke)}
          />
        </VStack>
        <Center mt="30px">
          {prevUrl !== null ? (
            <Button onClick={() => getPrevUrl(prevUrl)}>Previous</Button>
          ) : null}
          <Image
            onClick={() => setUrl('https://pokeapi.co/api/v2/pokemon/')}
            src="/Images/pokeball.jpeg"
            h="100px"
          />
          <Button onClick={() => getNextUrl(nextUrl)}>Next</Button>
        </Center>
      </Box>
    </>
  )
}

export default App
