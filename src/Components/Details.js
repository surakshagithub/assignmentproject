import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { useSelector } from "react-redux";

function a(code) {
  const Country_Query = gql`
    {
      country(code: "${code}") {
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

  return Country_Query;
}

function Details() {
  const isModal = useSelector((state) => state.countries.isDetailsModalOpen);
  const { data, loading, error } = useQuery(a(isModal || "NP"));
  console.log(data);

  if (loading) return <div>Loading</div>;
  if (error) return <div>error</div>;

  return (
    <div>
      <ul>
        <li>{data.country.name}</li>
      </ul>
    </div>
  );
}

export default Details;
