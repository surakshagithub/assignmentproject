import { useLazyQuery, useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { useEffect } from "react";
import { useSelector } from "react-redux";

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
      <ul>
        <li>{data?.country?.name}</li>
        <li>{data?.country?.code}</li>
        <li>{data?.country?.currency}</li>
      </ul>
    </div>
  );
}

export default Details;
