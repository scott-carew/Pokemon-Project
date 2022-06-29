import {
  Heading,
  Box,
  HStack,
  Text,
  Image,
  VStack,
  Center,
} from '@chakra-ui/react'
import React from 'react'

export default function PokeCard({ data }) {
  return (
    <Box>
      {!data ? (
        ''
      ) : (
        <Box>
          <Heading
            bgGradient="linear(to-l, #2D388A,#00AEEF)"
            bgClip="text"
            fontSize="5xl"
            fontWeight="extrabold"
          >
            <Center>{data.name.toUpperCase()}</Center>
          </Heading>

          <HStack>
            <VStack>
              {data.types.map((item) => {
                console.log(item)
                return (
                  <Box
                    px="4"
                    py="2"
                    bgColor="#a8e063"
                    border="solid"
                    borderRadius={'lg'}
                    key={item.type.name}
                  >
                    <Text fontSize="2xl" fontWeight="extrabold">
                      {item.type.name}
                    </Text>
                  </Box>
                )
              })}
            </VStack>
            <Image
              m={8}
              h="200px"
              src={data.sprites.other.dream_world.front_default}
              alt={`Image of ${data.name}`}
            />
            <VStack>
              {data.stats.map((item) => {
                return (
                  <Text
                    key={item.stat.name}
                    bgGradient="linear(to-l, #446B6A, #478D73 )"
                    bgClip="text"
                    fontSize="2xl"
                    fontWeight="extrabold"
                  >
                    {item.stat.name}: {item.base_stat}
                  </Text>
                )
              })}
            </VStack>
          </HStack>
          <HStack>
            {data.abilities.map((item) => {
              return (
                <Box
                  px="4"
                  py="2"
                  bgColor="yellow.200"
                  border="solid"
                  borderRadius={'lg'}
                  key={item.ability.name}
                >
                  <Text fontSize="2xl" fontWeight="extrabold">
                    {item.ability.name}
                  </Text>
                </Box>
              )
            })}
          </HStack>
        </Box>
      )}
    </Box>
  )
}
