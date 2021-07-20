import { Text, Flex } from '@chakra-ui/react'
import React from 'react'

import { RiArrowRightLine, RiArrowLeftLine, RiArrowDownLine } from 'react-icons/ri'

function Frontpage() {
  const badge = '< Full Stack Web Developer >'
  return (
    <>
      <Flex direction="column" justify="center" align="center" h="100vh" fontSize="1.5em">
        <Text fontFamily="Chivo" color="detail" fontSize="3.5em">
          lucas-kaminski
        </Text>
        <Text>{badge}</Text>
        <Flex top="50vh" left="3vw" align="center" position="absolute">
          <RiArrowLeftLine />
          life
        </Flex>
        <Flex top="50vh" right="3vw" align="center" position="absolute">
          study
          <RiArrowRightLine />
        </Flex>
        <Flex
          bottom="3vh"
          right="50vw"
          direction="column"
          align="center"
          position="absolute"
        >
          work
          <RiArrowDownLine />
        </Flex>
      </Flex>
    </>
  )
}

export default Frontpage
