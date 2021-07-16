import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Default from "./Default";

export default function About() {
  return (
    <Default id="about" title="Sobre mim">
      <Flex pt={10} direction="column" textAlign="justify" w="70%">
        <Text>Olá! Tudo bem? Meu nome é Lucas Kaminski e eu amo criar</Text>
      </Flex>
    </Default>
  );
}
