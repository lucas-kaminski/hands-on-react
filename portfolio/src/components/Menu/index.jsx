import { Button, Flex, IconButton, Spacer } from '@chakra-ui/react'
import React from 'react'
import { RiGithubLine, RiLinkedinBoxLine } from 'react-icons/ri'

const buttons = [
  { label: 'life' },
  { label: 'work' },
  { label: 'study' },
  { label: 'blog' },
]

const socials = [
  {
    aria: 'Github',
    icon: <RiGithubLine />,
  },
  {
    aria: 'LinkedIn',
    icon: <RiLinkedinBoxLine />,
  },
]

function Menu() {
  return (
    <Flex w="100%" h="10vh" px="3vw" align="center" top={0} position="absolute">
      Logo
      <Spacer />
      {buttons.map((item, index) => (
        <Button variant="unstyled" key={index} ml="1vw">
          {item.label}
        </Button>
      ))}
      {socials.map((item, index) => (
        <Flex fontSize="1.5em" ml="1vw">
          {item.icon}
        </Flex>
      ))}
    </Flex>
  )
}

export default Menu
