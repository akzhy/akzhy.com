import { graphql } from 'gatsby'
import React from 'react'
import BlogItem from 'components/item-blog'
import Layout from 'components/layout'
import { Section } from 'components/ui'
import Pagination from 'components/pagination'

export default function TemplateBlogList({
    data,
    pageContext,
}: {
    data: GatsbyTypes.BlogPageQuery
    pageContext: TemplateContext
}) {
    const blogItems = data.blog.edges.map((i) => (
        <BlogItem
            {...i.node}
            featured_image={
                i.node.featuredImage.node?.localFile
                    ?.childImageSharp as GatsbyTypes.ImageSharp
            }
            description={i.node.acf.description || ''}
            key={i.node.id}
        />
    ))

    return (
        <Layout
            seo={{
                title: 'Blog',
                description: `My blog where I write about some of the things that I've learned over the years. Mostly related to JavaScript and WordPress.`,
                image: data.cardimage?.childImageSharp?.original?.src,
            }}
        >
            <Section title="Blog">
                <div>{blogItems}</div>
                <Pagination
                    totalPages={pageContext.numPages}
                    type="blog"
                    currentPage={pageContext.currentPage}
                />
            </Section>
        </Layout>
    )
}

export const query = graphql`
    query BlogPage($skip: Int!, $limit: Int!) {
        cardimage: file(
            name: { eq: "blog" }
            sourceInstanceName: { eq: "cardimages" }
        ) {
            childImageSharp {
                original {
                    src
                }
            }
        }
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
