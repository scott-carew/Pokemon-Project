import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Center, Input } from '@chakra-ui/react'

export default function Home() {
  return (
    <Center h="48vh">
      <Button variant="primary" size="2xl">
        View My Collection
      </Button>
      <Link to="/pokemon">
        <Button variant="primary" size="xl">
          View Pokemon
        </Button>
      </Link>
    </Center>
  )
}
