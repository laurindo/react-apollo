import React from "react";
import LaunchContainer from "../../container/LaunchContainer";

const LaunchDetails = props => {
  const launchId = props.match.params.id;
  return (
    <div>
      <h4>Launch Details</h4>
      <LaunchContainer launchId={launchId} />
    </div>
  );
};

export default LaunchDetails;
