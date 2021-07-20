import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const styles = {
  global: props => ({
    body: {
      fontFamily: 'Montserrat',
      color: mode('gray.800', '#F6F5F0')(props),
      bg: mode('white', '#151514')(props),
    },
  }),
}

const colors = {
  detail: '#FEAD34',
}

const theme = extendTheme({ config, styles, colors })

export default theme
