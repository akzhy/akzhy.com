import { gql } from "@src/__generated__";

export const BLOG_CONTENT_QUERY = gql(`
  query BlogContent {
    posts {
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
