import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Title from "./title"
import { ShelfItem } from "./items"

import "../styles/shelf.scss"

export default () => {
    const query = useStaticQuery(graphql`
        query {
            allWordpressPost(
                filter: { categories: { elemMatch: { slug: { eq: "shelf" } } } }
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

    const shelfItems = [];
    query.allWordpressPost.edges.forEach((item,i) => {
        shelfItems.push(
            <ShelfItem title={item.node.title} description={item.node.acf.description} date={item.node.date} link={item.node.path} image={item.node.featured_media.localFile.childImageSharp.fluid} id={item.node.id} key={item.node.id}/>
        )
    })
    return (
        <div className="section" id="shelf">
            <div className="container">
                <Title data="Shelf"/>
                <div className="contents">
                    <div className="divider">
                        <div className="line"></div>
                    </div>
                    <div className="row">
                        {shelfItems}
                    </div>
                </div>
            </div>
        </div>
    )
}
