import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import Loading from "../../components/Loading";
import List from "../../components/List";
import { LAUNCHES_QUERY } from "../../graphql/Launch";

const LaunchesContainer = () => {
  const { loading, error, data, fetchMore } = useQuery(LAUNCHES_QUERY);

  if (loading) return <Loading />;
  if (error) return <p>error...</p>;

  debugger;

  return (
    <Fragment>
      <ul className="rates">
        {data.launches.launches.map(({ id, mission, rocket }) => (
          <List key={id} title={mission.name} subtitle={rocket.name} />
        ))}
      </ul>
      <div>
        {data.launches && data.launches.hasMore && (
          <button
            onClick={() =>
              fetchMore({
                variables: {
                  after: data.launches.cursor
                },
                updateQuery: (prev, { fetchMoreResult, ...rest }) => {
                  if (!fetchMoreResult) return prev;
                  return {
                    ...fetchMoreResult,
                    launches: {
                      ...fetchMoreResult.launches,
                      launches: [
                        ...prev.launches.launches,
                        ...fetchMoreResult.launches.launches
                      ]
                    }
                  };
                }
              })
            }
          >
            Load More
          </button>
        )}
      </div>
    </Fragment>
  );
};

export default LaunchesContainer;
