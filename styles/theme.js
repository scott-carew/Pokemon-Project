import { extendTheme } from '@chakra-ui/react'
import { ButtonStyles as Button } from './components/buttonStyles'
import { gridStyle as GridItem } from './components/gridStyle'

export const pokeTheme = extendTheme({
  //pass the objects that will be added to the theme
  colors: {
    primary: '#24a0ed',
  },
  components: {
    Button,
    GridItem,
  },
})
