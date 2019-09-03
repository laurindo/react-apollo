import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import Loading from "../../components/Loading";
import LaunchDetail from "../../components/LaunchDetail";
import { LAUNCH_DETAILS } from "../../graphql/Launch";

const LaunchContainer = ({ launchId }) => {
  const { loading, error, data } = useQuery(LAUNCH_DETAILS, {
    variables: { launchId }
  });

  if (loading) return <Loading />;
  if (error) return <p>error...</p>;

  return (
    <Fragment>
      <LaunchDetail {...data.launch} />
    </Fragment>
  );
};

export default LaunchContainer;
