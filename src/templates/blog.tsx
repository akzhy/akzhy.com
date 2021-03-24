import { graphql } from 'gatsby'
import React from 'react'
import TemplateSinglePage from './post'

export default function ShelfTemplate({
    data,
}: {
    data: GatsbyTypes.BlogSingleQuery
}) {
    return <TemplateSinglePage data={data} type="blog" />
}

export const query = graphql`query BlogSingle($id: String!) {
  query: wpPost(id: {eq: $id}) {
    acf {
      description
      metaDescription
      metaKeywords
    }
    databaseId
    title
    content
    date(formatString: "DD MMM YYYY")
    modified(formatString: "DD MMM YYYY")
    featuredImage {
      node {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
}
`
