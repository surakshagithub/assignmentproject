import { Container, HStack } from "@chakra-ui/react";
import RecentlyExplored from "./RecentlyExplored";
import CurrencySearch from "./currencySearch";

function CountriesCard() {
  return (
    <>
      <HStack m={50}>
        <Container
          // className="container"
          maxW="xl"
          border="1px"
          borderColor="pink"
          borderRadius="10"
          height={400}
        >
          <RecentlyExplored />
        </Container>

        <Container
          maxW="xl"
          border="1px"
          borderColor="pink"
          borderRadius="10"
          // className="container"
          height={400}
        >
          <CurrencySearch />
        </Container>
      </HStack>
    </>
  );
}

export default CountriesCard;
