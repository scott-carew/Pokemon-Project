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
              mt="30px"
              borderRadius="lg"
              ml="4"
              py="4"
              px="8"
              backgroundColor={
                useColorMode === 'light' ? '#594C05' : '#24a0ed '
              }
              boxShadow="outline"
              p="6"
              rounded="md"
              key={pokemon.id}
              _hover={{ bg: whiten('#24a0ed', 20) }}
              _active={{
                bg: '#dddfe2',
                transform: 'scale(0.98)',
                borderColor: '#bec3c9',
              }}
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
