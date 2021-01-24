import React from 'react'
import { graphql } from 'gatsby'
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

    return (
        <Layout
            seo={{
                title: 'akzhy',
                description: `Hi, I am Akshay, I am a web developer from Kerala, India who loves to experiment with JavaScript. This is my personal webpage where I show case some of my works and write about some of the stuff that I've learned`,
                image: data.maincardimage?.childImageSharp?.original?.src,
            }}
        >
            <div className="wall mt-4 rounded-xl w-11/12 m-auto overflow-hidden relative">
                <img
                    src="/images/wall.jpg"
                    className="w-auto md:w-full"
                    alt=""
                />
                <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
                    <div>
                        <h1 className="text-6xl md:text-7xl font-black text-white text-center">
                            akzhy
                        </h1>
                        <p className="text-white mt-4 text-center">
                            Web Developer <span className="sep"></span>{' '}
                            Javascript Enthusiast
                        </p>
                    </div>
                </div>
            </div>
            <Section title="About">
                <p className="text-center text-fg-primary text-lg">
                    Hello, I am Akshay
                    <br />
                    I am a web developer who is very passionate about web
                    development and related fields.
                    <br />
                    I’ve been into web designing since i was 15 and thats when i
                    discovered my passion for it.
                    <br />I am also into a bit of graphic designing, though i am
                    no pro at it.
                </p>
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
