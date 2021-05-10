import {AppProps} from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '.../style/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
