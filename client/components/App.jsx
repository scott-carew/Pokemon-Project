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

import { faSearch } from 'react-icons'

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [filteredPokemonData, setFilteredPokemonData] = useState(null)
  const [pokeCardInfo, setPokeCardInfo] = useState()
  const [filter, setFilter] = useState('')
  const [url, setUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon/?limit=648?'
  )
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()

  useEffect(() => {
    getPokemonList(url)
      .then((pokemonList) => {
        setNextUrl(pokemonList.next)
        setPrevUrl(pokemonList.previous)
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

  const handleSearchFilter = (e) => {
    setFilter(e.target.value)
    // console.log('filter is', filter)
  }

  useEffect(() => {
    if (filter === '') {
      setFilteredPokemonData(null)
    } else {
      const filteredPokemon = pokemonData.filter((pokemon) => {
        return pokemon.name.includes(filter)
      })
      setFilteredPokemonData(filteredPokemon)
    }
  }, [filter])

  return (
    <>
      <Box
        w="100%"
        bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
      >
        <VStack>
          <Spacer />
          <Welcome />
          <Input
            bgColor="blue.100"
            onChange={handleSearchFilter}
            placeholder="Search pokemon by name"
            w="50%"
          />
          <PokeCard data={pokeCardInfo} />
          {console.log('pokemon data is', pokemonData)}
          {/* {pokemonData.map((pokemon) => pokemon.name.includes(filter)) && ( */}
          <Pokemon
            pokemonData={
              filteredPokemonData ? filteredPokemonData : pokemonData
            }
            pokeInfo={(poke) => setPokeCardInfo(poke)}
          />
          {/* )} */}
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
