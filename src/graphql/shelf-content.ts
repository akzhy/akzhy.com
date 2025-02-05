import { gql } from "@src/__generated__";

export const SHELF_CONTENT_QUERY = gql(`
  query ShelfContent {
    shelfItems {
      edges {
        node {
          id
          databaseId
          slug
          title
          content
          acf {
            description
          }
          date
          modified
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
