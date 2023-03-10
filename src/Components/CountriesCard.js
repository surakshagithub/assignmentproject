import { Container, HStack, Text, Box, Input } from "@chakra-ui/react";
// import { useSelector } from "react-redux";
import RecentlyExplored from "./RecentlyExplored";

function CountriesCard() {
  // const recentlyExploredCountries = useSelector(
  //   (state) => state.countries.recentCountries
  // );
  return (
    <>
      <HStack m={50}>
        {/* <Container
          maxW="xl"
          border="1px"
          borderColor="pink"
          borderRadius="10"
          height={300}
        >
          <Text my={2}>Recently Explored Countries</Text>
          {Boolean(recentlyExploredCountries.length) &&
            recentlyExploredCountries.map((country) => {
              return (
                <center>
                  <HStack my={5}>
                    <Box bg="blue" w="60%" p={3} color="white" mx={0}>
                      <Text>{country.name}</Text>
                    </Box>
                    <Box mx={0} bg="purple" p={3} color="white">
                      Details
                    </Box>
                  </HStack>
                </center>
              );
            })}
        </Container> */}
        <Container
          maxW="xl"
          border="1px"
          borderColor="pink"
          borderRadius="10"
          height={300}
        >
          <RecentlyExplored />
        </Container>

        <Container
          maxW="xl"
          border="1px"
          borderColor="pink"
          borderRadius="10"
          height={300}
        >
          <Text my={2}>Quick Currency Search</Text>

          <Input placeholder="USD" size="md" width="70%" />

          <center>
            <HStack my={5}>
              <Box bg="yellow" w="60%" p={3} color="white" mx={0}>
                <Text>American samoa</Text>
              </Box>
              <Box mx={0} bg="purple" p={3} color="white">
                Details
              </Box>
            </HStack>

            <HStack my={5}>
              <Box bg="yellow" w="60%" p={3} color="white" mx={0}>
                <Text>Bonaire</Text>
              </Box>
              <Box m={0} bg="purple" p={3} color="white">
                Details
              </Box>
            </HStack>
            <HStack my={5}>
              <Box bg="yellow" w="60%" p={3} color="white" mx={0}>
                <Text>Ecuador</Text>
              </Box>
              <Box m={0} bg="purple" p={3} color="white">
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
