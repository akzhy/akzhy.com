import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import BlogItem from 'components/item-blog'
import Layout from 'components/layout'
import { Section } from 'components/ui'
import { ShelfContainer } from 'components/item-portfolio'
import Contact from 'components/contact'

export default function Index({ data }: { data: GatsbyTypes.IndexMainQuery }) {
    const blogItems = data.blog.edges.map((i) => (
        <BlogItem
            {...i.node}
            featured_image={
                i.node.featuredImage.node?.localFile
                    ?.childImageSharp as GatsbyTypes.ImageSharp
            }
            description={i.node.acf.description || ''}
            key={`home-blog-${i.node.id}`}
        />
    ))

    const wallImage = (data.wall?.childImageSharp as unknown) as Pick<
        GatsbyTypes.ImageSharp,
        'gatsbyImageData'
    >

    const frontpageSettings = (data.frontpage?.siteSettings
        ?.frontpage as unknown) as Pick<
        GatsbyTypes.WpSiteSettingsFrontPage,
        'about' | 'seo_description'
    > & {
        hero_image: Pick<GatsbyTypes.WpSiteSettingsImage, 'url'>
    }

    return (
        <Layout
            seo={{
                title: 'akzhy',
                description: frontpageSettings.seo_description as string,
                image: frontpageSettings.hero_image.url,
            }}
        >
            <div className="wall mt-4 rounded-xl w-11/12 m-auto overflow-hidden relative">
                <GatsbyImage
                    alt=""
                    image={wallImage.gatsbyImageData}
                    className="w-auto md:w-full"
                />
                <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
                    <div>
                        <h1 className="text-6xl md:text-7xl font-black text-white text-center">
                            akzhy
                        </h1>
                        <p className="text-white mt-4 text-center">
                            Web Developer <span className="sep" /> Javascript
                            Enthusiast
                        </p>
                    </div>
                </div>
            </div>
            <Section title="About">
                <p
                    className="text-center text-fg-primary text-lg"
                    dangerouslySetInnerHTML={{
                        __html: frontpageSettings.about as string,
                    }}
                ></p>
            </Section>
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
            <Section title="Blog">{blogItems}</Section>
            <Section title="Contact">
                <Contact />
            </Section>
        </Layout>
    )
}

export const query = graphql`
    query IndexMain {
        frontpage: wp {
            siteSettings {
                frontpage {
                    about
                    hero_image {
                        url
                    }
                    seo_description
                }
            }
        }
        wall: file(name: { eq: "wall" }, sourceInstanceName: { eq: "images" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
        }
        maincardimage: file(
            name: { eq: "main" }
            sourceInstanceName: { eq: "cardimages" }
        ) {
            childImageSharp {
                original {
                    src
                }
            }
        }
        blog: allWpPost {
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
