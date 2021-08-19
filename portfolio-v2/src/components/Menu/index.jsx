import { Button, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import { RiGithubLine, RiLinkedinBoxLine } from 'react-icons/ri'
import { Link } from 'react-scroll'

const buttons = [
  { label: 'life', id: 'life' },
  { label: 'work', id: 'work' },
  { label: 'study', id: 'study' },
  { label: 'blog', id: 'blog' },
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
    <Flex w="100%" h="10vh" px="3vw" align="center" top={0} position="fixed" zIndex={999}>
      <Link to="frontpage">Logo</Link>
      <Spacer />
      {buttons.map((item, index) => {
        console.log(item.id)
        return (
          <Button variant="unstyled" key={index} ml="1vw">
            <Link to={item.id}>{item.label}</Link>
          </Button>
        )
      })}
      {socials.map((item, index) => (
        <Flex fontSize="1.5em" ml="1vw">
          {item.icon}
        </Flex>
      ))}
    </Flex>
  )
}

export default Menu
