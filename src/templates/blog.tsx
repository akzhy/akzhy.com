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

export const query = graphql`
    query BlogSingle($id: String!) {
        query: wpPost(id: { eq: $id }) {
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
