import { Button, Flex, Spacer } from '@chakra-ui/react'
import React, { useState } from 'react'

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


export default function Menu({ visibility }) {
  return (
    <Flex h='10vh' alignItems="center" px={8} position='fixed' style={visibility ? { top: 0 } : { position: 'fixed', bottom: 0 }} overflow='hidden' bottom={0} w='100%' >
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
