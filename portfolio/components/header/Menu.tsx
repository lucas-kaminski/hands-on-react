import { Flex, Button, useColorMode, HStack, IconButton, Heading, Text } from '@chakra-ui/react'
import React from 'react'

import { RiSunLine, RiMoonLine } from "react-icons/ri";

const opcoes = [
  { id: '1', value: 'Sobre mim', link: "#" },
  { id: '2', value: 'Conhecimento', link: "#" },
  { id: '3', value: 'Projetos', link: "#" },
  { id: '4', value: 'Contato', link: "#" },
]

export default function Menu() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex bg='red' width='100%' height='10vh'>
      <Flex justify='flex-start' width='100%' alignItems='center' ml={5}>
        <Heading mr={1} size="lg" fontWeight='thin'>Lucas</Heading><Heading size="lg" fontWeight='bold'>Kaminski</Heading>
      </Flex>
      <Flex justify='flex-end' width='100%' alignItems='center' mr={5}>
        <HStack spacing={5}>
          <IconButton
            aria-label="Search database"
            onClick={toggleColorMode}
            icon={colorMode === 'dark' ? <RiSunLine /> : <RiMoonLine />}
            variant='ghost'
          />
          {opcoes.map(option => {
            return (
              <Button key={option.id} variant='link'>
                {option.value}
              </Button>
            )
          })}
        </HStack>
      </Flex>
    </Flex>
  )
}


