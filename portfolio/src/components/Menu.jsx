import { Button, Text, Flex, Spacer } from "@chakra-ui/react";
import React, { useContext } from "react";

import { MainContext } from "../contexts/MainContextProvider";

const menus = [
  {
    key: 1,
    idRef: "#about",
    label: "Sobre mim",
  },
  {
    key: 2,
    idRef: "#experience",
    label: "Experiência",
  },
  {
    key: 3,
    idRef: "#projects",
    label: "Projetos",
  },
  {
    key: 4,
    idRef: "#blog",
    label: "Blog",
  },
  {
    key: 5,
    idRef: "#contact",
    label: "Contato",
  },
];

export default function Menu() {
  const { menuPositionTop } = useContext(MainContext);
  return (
    <Flex
      h="10vh"
      alignItems="center"
      px="5vw"
      position="fixed"
      style={menuPositionTop ? { top: 0 } : { bottom: 0 }}
      overflow="hidden"
      w="100%"
    >
      Logo
      <Spacer />
      {menus.map((item) => {
        return (
          <Button variant="unstyled" fontWeight="thin" mx={5} key={item.key}>
            <Text _hover={{ borderBottom: "1px" }}>{item.label}</Text>
          </Button>
        );
      })}
    </Flex>
  );
}
