import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { pokeTheme } from '../styles/theme'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ChakraProvider theme={pokeTheme}>
      <Router>
        <ColorModeScript initialColorMode="light" />
        <App />
      </Router>
    </ChakraProvider>,
    document.getElementById('app')
  )
})
