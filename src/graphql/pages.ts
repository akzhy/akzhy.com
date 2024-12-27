import { gql } from "@src/__generated__";

export const PAGES_QUERY = gql(`
  query Pages {
    pages {
      edges {
        node {
          id
          slug
          title
          content
          acf {
            description
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`);
