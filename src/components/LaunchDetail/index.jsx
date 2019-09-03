import React from "react";

const LaunchDetail = props => (
  <div>
    <img
      style={{ width: "20%" }}
      src={props.mission.missionPatch}
      alt="mission patch"
    />
    <h4>Mission</h4>
    <p>Name: {props.mission.name}</p>

    <h4>Rocket</h4>
    <p>Name: {props.rocket.name}</p>
    <p>Type: {props.rocket.type}</p>
  </div>
);

export default LaunchDetail;
