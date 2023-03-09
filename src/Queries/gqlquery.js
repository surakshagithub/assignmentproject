import { gql } from "@apollo/client";

export const Country_Query = gql`
  {
    countries {
      code
      name
      continent {
        name
      }
      capital
      currency
      languages {
        name
      }
    }
  }
`;
