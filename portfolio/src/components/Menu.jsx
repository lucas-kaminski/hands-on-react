import { Button, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'

const menus = [{
  key: 1,
  idRef: '#about',
  label: 'Sobre mim'
}, {
  key: 2,
  idRef: '#experience',
  label: 'Experiência'
}, {
  key: 3,
  idRef: '#projects',
  label: 'Projetos'
}]

export default function Menu() {
  return (
    <Flex bg='blue' h='10vh' alignItems="center" px={8} overflow='hidden' position='fixed' bottom={0} w='100%'>
      Logo
      <Spacer />
      {menus.map(item => {
        return (
          <Button bg='pink' mx={2} key={item.key}>
            {item.label}
          </Button>
        )
      })}
    </Flex>
  )
}
