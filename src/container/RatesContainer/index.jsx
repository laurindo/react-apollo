import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Loading from "../../components/Loading";
import List from "../../components/List";
import { RATES_QUERY } from "../../graphql/Rates";

const RatesContainer = () => {
  const { loading, error, data } = useQuery(RATES_QUERY);

  if (loading) return <Loading />;
  if (error) return <p>error...</p>;

  return (
    <ul className="rates">
      {data.rates.map(({ currency, rate }) => (
        <List key={currency} title={currency} subtitle={rate} />
      ))}
    </ul>
  );
};

export default RatesContainer;
