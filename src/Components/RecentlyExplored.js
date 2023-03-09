import { useSelector } from "react-redux";
import { HStack, Text, Box } from "@chakra-ui/react";

function RecentlyExplored() {
  const recentlyExploredCountries = useSelector(
    (state) => state.countries.recentCountries
  );

  return (
    <div>
      <Text my={2}>Recently Explored Countries</Text>
      {Boolean(recentlyExploredCountries.length) &&
        recentlyExploredCountries.map((country, index) => {
          return (
            <center key={index}>
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
    </div>
  );
}

export default RecentlyExplored;
