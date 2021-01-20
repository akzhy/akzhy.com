import React from 'react'
import { graphql } from 'gatsby'
import { ShelfContainer } from 'components/item-portfolio'
import { Section } from 'components/ui'
import Layout from 'components/layout'
import Pagination from 'components/pagination'

export default function TemplateShelfList({
    data,
    pageContext,
}: {
    data: GatsbyTypes.ShelfPageQuery
    pageContext: TemplateContext
}) {
    return (
        <Layout
            seo={{
                title: 'Shelf',
                description: `Shelf is the showcase for all the things that I've created.`,
                image: data.cardimage?.childImageSharp?.original?.src
            }}
        >
            <Section title="Shelf">
                <ShelfContainer
                    data={data.shelf.edges.map(({ node }) => ({
                        ...node,
                        description: node.acf.description || '',
                        featured_image: node.featuredImage.node?.localFile
                            ?.childImageSharp as GatsbyTypes.ImageSharp,
                    }))}
                />
                <Pagination
                    type="shelf"
                    totalPages={pageContext.numPages}
                    currentPage={pageContext.currentPage}
                />
            </Section>
        </Layout>
    )
}

export const query = graphql`
    query ShelfPage($skip: Int!, $limit: Int!) {
        cardimage: file(name: {eq: "shelf"}, sourceInstanceName: {eq: "cardimages"}) {
            childImageSharp {
                original {
                    src
                }
            }
        }
        shelf: allWpShelf(skip: $skip, limit: $limit) {
            edges {
                node {
                    id
                    slug
                    title
                    acf {
                        description
                    }
                    date(formatString: "DD MMM YYYY")
                    featuredImage {
                        node {
                            localFile {
                                childImageSharp {
                                    fluid {
                                        src
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
