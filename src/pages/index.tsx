import React from "react"
import { graphql } from 'gatsby';
import BlogItem from '../components/item-blog'
import Layout from '../components/layout'
import { Section } from '../components/ui'

export default function Index({ data }: {
    data: GatsbyTypes.IndexMainQuery
}) {
    
    const blogItems = data.blog.edges.map(i => (<BlogItem {...i.node} featured_image={i.node.featuredImage.node?.localFile?.childImageSharp as GatsbyTypes.ImageSharp}/>));

    console.log(data.blog.edges[0].node);

    return (
        <Layout>
            <div className="wall mt-4 rounded-xl w-11/12 m-auto overflow-hidden relative">
                <img src="/images/wall.jpg" className="w-full" />
                <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
                    <div>
                        <h1 className="text-7xl font-black text-white text-center">akzhy</h1>
                        <p className="text-white mt-4 text-center">Web Developer <span className="sep"></span> Javascript Enthusiast</p>
                    </div>
                </div>
            </div>
            <Section title="About">
                <p className="text-center text-fg-primary text-lg">Hello, I am Akshay<br />
I am a web developer who is very passionate about web development and related fields.<br />
I’ve been into web designing since i was 15 and thats when i discovered my passion for it.<br />
I am also into a bit of graphic designing, though i am no pro at it.</p>
            </Section>
            <Section title="Blog">
                {blogItems}
            </Section>
        </Layout>
    )
}

export const query = graphql`
    query IndexMain{
        blog: allWpPost {
            edges {
                node {
                    id
                    slug
                    title
                    date
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