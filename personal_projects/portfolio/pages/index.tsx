import React from 'react'
import { Flex, Button, useColorMode } from '@chakra-ui/react'
import Menu from '../components/header/Menu'
import About from '../components/body/About'

export default function index() {
  return (
    <Flex w="80%" mx='auto' h="100vh" bg='gray.300' direction='column'>
      <Menu />
      <About />
    </Flex >
  )
}

