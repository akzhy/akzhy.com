import React from 'react'
import { graphql } from 'gatsby'
import TemplateSinglePage from './post'

export default function ShelfTemplate({
    data,
}: {
    data: GatsbyTypes.ShelfSingleQuery
}) {
    return <TemplateSinglePage data={data} type="shelf" />
}

export const query = graphql`
    query ShelfSingle($id: String!) {
        query: wpShelf(id: { eq: $id }) {
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
