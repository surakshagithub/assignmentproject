import React from "react";
import { Container, HStack, Text, Box, Spacer, Button } from "@chakra-ui/react";

function CountriesCard() {
  return (
    <>
      <HStack m={50}>
        <Container
          maxW="xl"
          border="1px"
          borderColor="pink"
          borderRadius="10"
          height={300}
        >
          <Text my={2}>Recently Explored Countries</Text>
          <center>
            <HStack my={5} mx={0}>
              <Box bg="yellow" w="60%" p={3} color="white" mx={0}>
                <Text>Nepal</Text>
              </Box>
              <Box mx={0} bg="purple" color="white" p={3}>
                Details
              </Box>
            </HStack>

            <HStack my={5}>
              <Box bg="yellow" w="60%" p={3} color="white" mx={0}>
                <Text>Nepal</Text>
              </Box>
              <Box mx={0} bg="purple" p={3}  color="white">
                Details
              </Box>
            </HStack>
            <HStack my={5}>
              <Box bg="yellow" w="60%" p={3} color="white" mx={0}>
                <Text>Nepal</Text>
              </Box>
              <Box mx={0} bg="purple"  color="white" p={3}>
                Details
              </Box>
            </HStack>
          </center>
        </Container>

        <Container
          maxW="xl"
          border="1px"
          borderColor="pink"
          borderRadius="10"
          height={300}
        >
          

          <Text my={2}>Quick Currency Search</Text>
          
          <Box bg="gray" w="70%" p={2} color="white" borderRadius="10">
            USD
          </Box>
          <center>
            <HStack my={5}>
              <Box bg="yellow" w="60%" p={3} color="white" mx={0}>
                <Text>American samoa</Text>
              </Box>
              <Box mx={0} bg="purple" p={3}  color="white">
                Details
              </Box>
            </HStack>

            <HStack my={5}>
              <Box bg="yellow" w="60%" p={3} color="white" mx={0}>
                <Text>Bonaire</Text>
              </Box>
              <Box m={0} bg="purple" p={3}  color="white">
                Details
              </Box>
            </HStack>
            <HStack my={5}>
              <Box bg="yellow" w="60%" p={3} color="white" mx={0} >
                <Text>Ecuador</Text>
              </Box>
              <Box m={0} bg="purple" p={3}  color="white">
                Details
              </Box>
            </HStack>
            
          </center>
        </Container>
      </HStack>
    </>
  );
}

export default CountriesCard;
