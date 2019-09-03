import { gql } from "apollo-boost";

export const RATES_QUERY = gql`
  {
    rates(currency: "USD") {
      currency
    }
  }
`;
