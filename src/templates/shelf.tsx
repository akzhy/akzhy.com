import { graphql } from 'gatsby'
import React from 'react'
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
            title
            content
            date(formatString: "DD MMM YYYY")
            modified
            featuredImage {
                node {
                    localFile {
                        childImageSharp {
                            fluid {
                                base64
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`
