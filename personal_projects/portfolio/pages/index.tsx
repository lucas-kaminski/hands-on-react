import React from 'react'
import { Flex, Button, useColorMode } from '@chakra-ui/react'

export default function index() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex bg='brand.900'>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button> </Flex>
  )
}

