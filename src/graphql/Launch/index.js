import { gql } from "apollo-boost";

export const LAUNCH_TITLE_DATA = gql`
  fragment LaunchTitle on Launch {
    id
    site
    isBooked
    rocket {
      id
      name
    }
    mission {
      name
      missionPatch
    }
  }
`;

export const LAUNCHES_QUERY = gql`
  ${LAUNCH_TITLE_DATA}
  query launchList($after: String) {
    launches(after: $after) {
      cursor
      hasMore
      launches {
        ...LaunchTitle
      }
    }
  }
`;

export const LAUNCH_DETAILS = gql`
  ${LAUNCH_TITLE_DATA}
  query LaunchDetails($launchId: ID!) {
    launch(id: $launchId) {
      ...LaunchTitle
    }
  }
`;
