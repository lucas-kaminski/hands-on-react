import { Button, Text, Flex, Spacer } from "@chakra-ui/react";
import React, { useContext } from "react";

import { MainContext } from "../contexts/MainContextProvider";

import { Link, animateScroll as scroll } from "react-scroll";

const menus = [
  {
    key: 1,
    idRef: "about",
    label: "Sobre mim",
  },
  {
    key: 2,
    idRef: "experience",
    label: "Experiência",
  },
  {
    key: 3,
    idRef: "projects",
    label: "Projetos",
  },
  {
    key: 4,
    idRef: "blog",
    label: "Blog",
  },
  {
    key: 5,
    idRef: "contact",
    label: "Contato",
  },
];

export default function Menu() {
  const { menuPositionTop } = useContext(MainContext);
  return (
    <Flex
      id="menu"
      h="10vh"
      alignItems="center"
      px="5vw"
      position="fixed"
      style={menuPositionTop ? { top: 0 } : { bottom: 0 }}
      overflow="hidden"
      w="100%"
    >
      <Link
        activeClass="active"
        to="frontpage"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Logoaaa
      </Link>
      <Spacer />
      {menus.map((item) => {
        return (
          <Link
            activeClass="active"
            to={item.idRef}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button variant="unstyled" fontWeight="thin" mx={5} key={item.key}>
              <Text _hover={{ borderBottom: "1px" }}>{item.label}</Text>
            </Button>
          </Link>
        );
      })}
    </Flex>
  );
}
