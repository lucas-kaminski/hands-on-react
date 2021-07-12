import { Flex, IconButton, Link } from "@chakra-ui/react";
import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContextProvider";

import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiInstagramLine,
} from "react-icons/ri";

export default function Leftbar() {
  const { menuPositionTop } = useContext(MainContext);
  const content = [
    {
      key: 1,
      aria: "github",
      link: "https://github.com/lucas-kaminski",
      icon: <RiGithubLine />,
    },
    {
      key: 2,
      aria: "linkedin",
      link: "https://www.linkedin.com/in/lucas-kaminski/",
      icon: <RiLinkedinBoxLine />,
    },
    {
      key: 3,
      aria: "instagram",
      link: "https://www.instagram.com/kaminskizada/",
      icon: <RiInstagramLine />,
    },
  ];
  if (menuPositionTop) {
    return (
      <Flex position="fixed" bottom={0} ml="2vw" mb="2vw" direction="column">
        {content.map((item) => {
          return (
            <Link href={item.link} isExternal>
              <IconButton
                my={5}
                aria-label={item.aria}
                icon={item.icon}
                color="yellow"
                variant="unstyled"
                fontSize="30px"
              />
            </Link>
          );
        })}
      </Flex>
    );
  }
  return <></>;
}
