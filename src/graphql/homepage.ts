import { gql } from "@src/__generated__";

export const HOME_PAGE_QUERY = gql(`
  query IndexMain {
    siteSettings {
      frontpage {
        about
        hero_image {
          url
        }
        seo_description
      }
    }
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
