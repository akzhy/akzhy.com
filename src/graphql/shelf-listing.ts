import { gql } from "@src/__generated__";

export const SHELF_LISTING_QUERY = gql(`
  query ShelfListing {
    shelfItems {
      edges {
        node {
          id
          slug
          title
          acf {
            description
          }
          date
          featuredImage {
            node {
              sourceUrl
              srcSet
            }
          }
        }
      }
    }
  }
`);
