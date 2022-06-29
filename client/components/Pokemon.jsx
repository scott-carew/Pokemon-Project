import React, { useState } from 'react'

import {
  Text,
  Image,
  useColorMode,
  HStack,
  Grid,
  GridItem,
  Spacer,
  Input,
} from '@chakra-ui/react'

export default function Pokemon({ pokemonData, pokeInfo }) {
  const [filter, setFilter] = useState('')

  const handleSearchFilter = (e) => {
    setFilter(e.target.value)
    console.log(filter)
  }

  return (
    <>
      <Input bgColor="gray.300" onChange={handleSearchFilter} />
      <Grid templateColumns="repeat(4, 1fr)" gap={50}>
        {pokemonData.map((pokemon) => {
          pokemon.name.includes(filter)
          return (
            <GridItem
              mt="30px"
              borderRadius="lg"
              ml="4"
              py="4"
              px="8"
              // maxW="sm"
              // mt="4"
              backgroundColor={
                useColorMode === 'light' ? '#594C05' : '#24a0ed '
              }
              // bgColor="24a0ed"
              boxShadow="outline"
              p="6"
              rounded="md"
              key={pokemon.id}
              _hover={{ bg: '#0087d5' }}
              _active={{
                bg: '#dddfe2',
                transform: 'scale(0.98)',
                borderColor: '#bec3c9',
              }}
              _focus={{
                boxShadow:
                  '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
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
                <Text fontSize="3xl" color="white" fontWeight="bold">
                  {pokemon.name.charAt(0).toUpperCase() +
                    pokemon.name.substr(1)}
                </Text>
              </HStack>
            </GridItem>
          )
        })}
      </Grid>
    </>
  )
}
