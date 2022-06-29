import React, { useState, useEffect } from 'react'

import { getWelcome } from '../apiClient'

import {
  Heading,
  Image,
  Center
} from '@chakra-ui/react'

const themeTune = new Audio('/Audio/pokemon-theme.mp3')

const handleThemeTune = (e) => {
  if (e.type === 'mouseover') {
    themeTune.play()
  } else if (e.type === 'mouseleave') {
    themeTune.pause()
    themeTune.currentTime = 0
  }
}

export default function Welcome() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement)
      })
      .catch((err) => {
        console.error(err.message)
      })
  })
  return (
    <Center>
      <Heading
        bgGradient="linear(to-l, #2D388A,#00AEEF)"
        bgClip="text"
        fontSize="5xl"
        fontWeight="extrabold"
        textShadow="5px 5px "
        m="6"
      >
        {welcomeStatement}
        <Center mt="30px">
          <Image
            onMouseOver={handleThemeTune}
            onMouseLeave={handleThemeTune}
            src="/Images/pngegg.png"
            alt=""
            w="320px"
            h="120px"
          />
        </Center>
        <Center>
          <Heading
            bgGradient="linear(to-l, #2D388A,#00AEEF)"
            bgClip="text"
            fontSize="3xl"
            fontWeight="extrabold"
            m="5px"
          >
            Gotta Catch &apos;Em All!
          </Heading>
        </Center>
      </Heading>
    </Center>
  )
}
