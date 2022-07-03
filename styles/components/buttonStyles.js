import { darken, whiten } from '@chakra-ui/theme-tools'

//Be sure to name this different to the component to avoid confusion when importing to theme.ts
export const ButtonStyles = {
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    primary: {
      color: 'white',
      mt: '30px',
      borderRadius: 'lg',
      ml: '4',
      py: '4',
      px: '8',
      backgroundColor: 'primary',
      boxShadow: 'outline',
      p: '6',
      rounded: 'md',
      _hover: {
        bg: whiten('primary', 20),
      },
      _active: {
        bg: '#dddfe2',
        transform: 'scale(0.98)',
        borderColor: '#bec3c9',
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
}
