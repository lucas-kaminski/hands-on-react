import { Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function Frontpage() {
  return (
    <Center bg='red' h="90vh">
      <Flex direction='column'>
        <Text bg='blue'><Flex direction='row' justify='center'>Olá, eu sou o <Text bg='green'>Lucas Kaminski</Text></Flex>Sou um desenvolvedor web full-stack, saiba mais:</Text>
      </Flex>
    </Center>
  )
}

// spacer flex no menu