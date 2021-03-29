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
                description: data.blogLising?.siteSettings?.blogListing
                    ?.seo_description as string,
                image:
                    data.blogLising?.siteSettings?.blogListing?.seo_image?.url,
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
        blogLising: wp {
            siteSettings {
                blogListing {
                    seo_description
                    seo_image {
                        url
                    }
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
        }
    }
`
