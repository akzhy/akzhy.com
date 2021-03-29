import React from 'react'
import { graphql } from 'gatsby'
import TemplateSinglePage from './post'

export default function PageTemplate({
    data,
}: {
    data: GatsbyTypes.PageSingleQuery
}) {
    return <TemplateSinglePage data={data} type="page" />
}

export const query = graphql`
    query PageSingle($id: String!) {
        query: wpPage(id: { eq: $id }) {
            acf {
                description
                metaDescription
            }
            databaseId
            title
            content
            date(formatString: "DD MMM YYYY")
            modified
            featuredImage {
                node {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                placeholder: BLURRED
                                layout: FULL_WIDTH
                            )
                        }
                    }
                }
            }
        }
    }
`
