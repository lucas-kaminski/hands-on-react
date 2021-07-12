import { Flex, Text, Heading } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { MainContext } from "../contexts/MainContextProvider";

export default function Frontpage({ isVisible }) {
  const { setMenuPositionTop } = useContext(MainContext);
  useEffect(() => {
    if (isVisible) {
      setMenuPositionTop(false);
    } else {
      setMenuPositionTop(true);
    }
  }, [isVisible, setMenuPositionTop]);

  return (
    <Flex
      id="frontpage"
      direction="column"
      align="center"
      justifyContent="center"
      my="auto"
      h="90vh"
    >
      <Heading size="4xl">I'm Lucas Kaminski</Heading>
      <Text>Javascript Full Stack Web Developer</Text>
      <Flex position="absolute" mt="70vh">
        button Know more mouse
      </Flex>
    </Flex>
  );
}

// spacer flex no menu
