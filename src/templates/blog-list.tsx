import { graphql } from 'gatsby'
import React from 'react'
import BlogItem from '../components/item-blog'
import Layout from '../components/layout'
import { Section } from '../components/ui'

export default function TemplateBlogList({
    data,
}: {
    data: GatsbyTypes.BlogPageQuery
}) {
    const blogItems = data.blog.edges.map((i) => (
        <BlogItem
            {...i.node}
            featured_image={
                i.node.featuredImage.node?.localFile
                    ?.childImageSharp as GatsbyTypes.ImageSharp
            }
            description={i.node.acf.description || ''}
        />
    ))

    return (
        <Layout
            seo={{
                title: 'Blog',
                description: '',
            }}
        >
            <Section title="Blog">{blogItems}</Section>
        </Layout>
    )
}

export const query = graphql`
    query BlogPage($skip: Int!, $limit: Int!) {
        blog: allWpPost(skip: $skip, limit: $limit) {
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
