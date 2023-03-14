import { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import { useLazyQuery } from "@apollo/client";
import { Input } from "@chakra-ui/react";
import { HStack, Text, Box, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setDetailsModalStatus } from "../redux/users/countriesSlice";
import { useDebounce } from "../hooks/useDebounce";

const CURRENCY_QUERY = gql`
  query getCurrency($currencyValue: String) {
    countries(filter: { currency: { eq: $currencyValue } }) {
      code
      name
      currency
    }
  }
`;

function CurrencySearch() {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const debounceSearchTerm = useDebounce(value, 1000);

  const [fetchByCurrency, CurrencySearchQuery] = useLazyQuery(CURRENCY_QUERY);

  const { data, loading, error } = CurrencySearchQuery;

  // useEffect(() => {
  //   let timeOut = setTimeout(() => {
  //     fetchByCurrency({ variables: { currencyValue: value } });
  //   }, 3000);
  //   return () => clearTimeout(timeOut);
  // }, [value, fetchByCurrency]);

  //   if (loading) return <div>Loading</div>;

  useEffect(() => {
    if (debounceSearchTerm) {
      fetchByCurrency({
        variables: { currencyValue: debounceSearchTerm },
      });
    }
  }, [debounceSearchTerm, fetchByCurrency]);

  const handleText = (text) => {
    setValue(text);
  };

  // if (error) return <div>error</div>;

  return (
    <>
      <Input
        placeholder="Enter currency"
        size="md"
        width="70%"
        value={value}
        onChange={(e) => handleText(e.target.value)}
      />
      {/* <Button
        onClick={() => fetchByCurrency({ variables: { currencyValue: value } })}
        // onClick={handleClick}
      >
        Search
      </Button> */}

      {data?.countries?.map((country) => {
        return (
          <center key={country.code}>
            <HStack my={5}>
              <Box bg="blue" w="60%" p={3} color="white" mx={0}>
                <Text>{country.name}</Text>
              </Box>
              <Box
                className="Box"
                mx={0}
                bg="purple"
                p={3}
                color="white"
                onClick={() => {
                  dispatch(setDetailsModalStatus(country.code));
                }}
              >
                Details
              </Box>
            </HStack>
          </center>
        );
      })}
    </>
  );
}

export default CurrencySearch;
