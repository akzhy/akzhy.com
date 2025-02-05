import { gql } from "@src/__generated__";

export const BLOG_LISTING_QUERY = gql(`
  query BlogListing {
    posts {
      edges {
        node {
          id
          databaseId
          slug
          title
          acf {
            description
          }
          date
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
