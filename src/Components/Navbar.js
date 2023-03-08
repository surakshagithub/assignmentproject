import React from "react";
import { Flex, Spacer, Heading, HStack, Box, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Flex
        as="nav"
        p="4px"
        alignItems="center"
        bg="blackAlpha.800"
        color="white"
        mb={5}
      >
        {/* <NavLink to="/"><Heading as="h1" fontSize="2xl" m="0 22px">New App</Heading></NavLink> */}
        <NavLink to="/">
          <Button borderRadius="100" bg="white" mx={2}></Button>
        </NavLink>

        <HStack spacing="12px">
          <NavLink to="/">
            <Box className="hoverEffect" p={4} color="white" fontSize="1xl">
              HOME
            </Box>
          </NavLink>
          <NavLink to="/countries">
            <Box className="hoverEffect" py={4} color="white" fontSize="1xl">
              COUNTRIES
            </Box>
          </NavLink>
        </HStack>
        <Spacer />
      </Flex>
    </>
  );
}

export default Navbar;
