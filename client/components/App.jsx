import React, { useState, useEffect, Fragment } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import { getPokemonData, getPokemonList } from '../apiClient'
import Welcome from './Welcome'
import Pokemon from './Pokemon'
import PokeCard from './PokeCard'
import Home from './Home'
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
  const [filteredPokemonData, setFilteredPokemonData] = useState(null)
  const [pokeCardInfo, setPokeCardInfo] = useState()
  const [filter, setFilter] = useState('')
  const [url, setUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon/?limit=150?'
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/pokemon"
              element={
                <>
                  <Input
                    bgColor="blue.100"
                    onChange={handleSearchFilter}
                    placeholder="Search pokemon by name"
                    w="50%"
                  />
                  <Pokemon
                    pokemonData={
                      filteredPokemonData ? filteredPokemonData : pokemonData
                    }
                    pokeInfo={(poke) => setPokeCardInfo(poke)}
                  />
                </>
              }
            ></Route>
            <Route
              path="/pokemon/:name"
              element={<PokeCard data={pokeCardInfo} />}
            />
          </Routes>

          {console.log('pokemon data is', pokemonData)}
        </VStack>
        <Center mt="30px">
          {/* {prevUrl !== null ? (
            <Button onClick={() => getPrevUrl(prevUrl)}>Previous</Button>
          ) : null} */}
          <Link to="/">
            <Image
              // onClick={() => setUrl('https://pokeapi.co/api/v2/pokemon/')}
              src="/Images/pokeball.jpeg"
              h="100px"
            />
          </Link>
          {/* <Button onClick={() => getNextUrl(nextUrl)}>Next</Button> */}
        </Center>
      </Box>
    </>
  )
}

export default App
