import { useLazyQuery, useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { HStack, Box } from "@chakra-ui/react";

const GET_COUNTRY_DETAIL = gql`
  query countryDetail($code: ID!) {
    country(code: $code) {
      code
      name
      capital
      phone
      currency
      emoji
      native
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;

function Details() {
  const isModal = useSelector((state) => state.countries.isDetailsModalOpen);
  const [fetchCountryDetail, countryDeailQuery] =
    useLazyQuery(GET_COUNTRY_DETAIL);

  useEffect(() => {
    if (isModal) {
      console.log(isModal);
      fetchCountryDetail({ variables: { code: isModal } });
    }
  }, [isModal, fetchCountryDetail]);

  const { data, loading, error } = countryDeailQuery;

  if (loading) return <div>Loading</div>;
  if (error) return <div>error</div>;

  return (
    <div>
      <HStack my={2}>
        <Box bg="yellow.400" w="30%" p={4} color="white">
          Code
        </Box>
        <Box bg="red.100" w="80%" p={4} color="black">
          {data?.country?.code}
        </Box>
      </HStack>

      <HStack my={2}>
        <Box bg="yellow.400" w="30%" p={4} color="white">
          Name
        </Box>
        <Box bg="red.100" w="80%" p={4} color="black">
          {data?.country?.name}
        </Box>
      </HStack>

      <HStack my={2}>
        <Box bg="yellow.400" w="30%" p={4} color="white">
          Capital
        </Box>
        <Box bg="red.100" w="80%" p={4} color="black">
          {data?.country?.capital}
        </Box>
      </HStack>

      <HStack my={2}>
        <Box bg="yellow.400" w="30%" p={4} color="white">
          Currency
        </Box>
        <Box bg="red.100" w="80%" p={4} color="black">
          {data?.country?.currency}
        </Box>
      </HStack>

      <HStack my={2}>
        <Box bg="yellow.400" w="30%" p={4} color="white">
          Languages
        </Box>
        <Box bg="red.100" w="80%" p={4} color="black">
          {data?.country?.languages
            .map((language) => {
              return language.name;
            })
            .join(", ")}
        </Box>
      </HStack>

      <HStack my={2}>
        <Box bg="yellow.400" w="30%" p={4} color="white">
          Continent
        </Box>
        <Box bg="red.100" w="80%" p={4} color="black">
          {data?.country?.continent.name}
        </Box>
      </HStack>
    </div>
  );
}

export default Details;
