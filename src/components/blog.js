import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Title from "./title"
import { BlogItem } from "./items"

import "../styles/blog.less"

export default () => {
    const query = useStaticQuery(graphql`
        query {
            allWordpressPost(
                filter: { categories: { elemMatch: { slug: { eq: "blog" } } } }
            ) {
                edges {
                    node {
                        acf{
                            description
                        }
                        id
                        date(formatString: "DD MMM YYYY")
                        title
                        path
                        featured_media {
                            source_url
                            localFile {
                                childImageSharp {
                                    fluid(maxWidth: 600) {
                                        src
                                        ...GatsbyImageSharpFluid_noBase64
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const blogItems = [];
    query.allWordpressPost.edges.forEach((item,i) => {
        blogItems.push(
            <BlogItem title={item.node.title} description={item.node.acf.description} date={item.node.date} link={item.node.path} image={item.node.featured_media.localFile.childImageSharp.fluid} id={item.node.id} key={item.node.id}/>
        )
    })
    return (
        <div className="section" id="blog">
            <div className="container">
                <Title data="Blog"/>
                <div className="contents">
                    <div className="row">
                        {blogItems}
                    </div>
                </div>
            </div>
        </div>
    )
}
