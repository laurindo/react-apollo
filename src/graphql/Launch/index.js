import { gql } from "apollo-boost";

export const LAUNCH_BY_ID_QUERY = gql`
  query GetLaunch {
    launch(id: 56) {
      id
      mission {
        name
      }
    }
  }
`;

export const LAUNCHES_QUERY = gql`
  query launchList($after: String) {
    launches(after: $after) {
      cursor
      hasMore
      launches {
        id
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
    }
  }
`;

export const LAUNCH_DETAILS = gql`
  query LaunchDetails($launchId: ID!) {
    launch(id: $launchId) {
      id
      site
      isBooked
      rocket {
        id
        name
        type
      }
      mission {
        name
        missionPatch
      }
    }
  }
`;
