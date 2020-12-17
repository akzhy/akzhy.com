import React from 'react'
import { graphql } from 'gatsby'
import { ShelfContainer } from '../components/item-portfolio'
import { Section } from '../components/ui'
import Layout from '../components/layout'

export default function TemplateShelfList({
    data,
}: {
    data: GatsbyTypes.ShelfPageQuery
}) {
    return (
        <Layout
            seo={{
                title: 'Shelf',
                description: 'Shelf Items',
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
            </Section>
        </Layout>
    )
}

export const query = graphql`
    query ShelfPage {
        shelf: allWpShelf {
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
