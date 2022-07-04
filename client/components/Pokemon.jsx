import React from 'react'
import { Link } from 'react-router-dom'

import {
  Text,
  Image,
  useColorMode,
  HStack,
  Grid,
  GridItem,
  Spacer,
} from '@chakra-ui/react'
import { whiten } from '@chakra-ui/theme-tools'

export default function Pokemon({ pokemonData, pokeInfo }) {
  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={50}>
        {pokemonData.map((pokemon) => {
          return (
            <GridItem
              variant="primary"
              key={pokemon.id}
              onClick={() => pokeInfo(pokemon)}
            >
              <HStack>
                <Text fontSize="3xl" color="white">
                  {pokemon.id}
                </Text>
                <Spacer />
                <Image
                  h="60px"
                  src={pokemon.sprites.other.dream_world.front_default}
                />
                <Spacer />
                <Link to={`/pokemon/${pokemon.name}`}>
                  <Text fontSize="3xl" color="white" fontWeight="bold">
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.substr(1)}
                  </Text>
                </Link>
              </HStack>
            </GridItem>
          )
        })}
      </Grid>
    </>
  )
}
