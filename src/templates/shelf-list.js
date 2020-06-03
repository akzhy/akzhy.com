import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import { Pagination, ShelfItem } from "../components/items"
import { graphql } from "gatsby"

import "../styles/shelf.scss"

const seo = {
    title: "Shelf",
    description: "The Shelf is a collection of all the projects and other stuff that I made. It showcases all the works I have done. Almost all of my works are Open Source and can be found in my GitHub page."
}

export default ({ data, pageContext }) => {    

    if(pageContext.currentPage !== 1){
        seo.title = `Shelf, page ${pageContext.currentPage}`
    }

    const shelfItems = [];
    data.allWordpressPost.edges.forEach((item,i) => {
        shelfItems.push(
            <ShelfItem title={item.node.title} description={item.node.acf.description} date={item.node.date} link={item.node.path} image={item.node.featured_media.localFile.childImageSharp.fluid} id={item.node.id} key={item.node.id}/>
        )
    })

    return (
        <Layout seo={seo}>
            <div className="section" id="shelf">
                <div className="container">
                    <Title data="Shelf" />
                    <div className="contents">
                        <div className="divider">
                            <div className="line"></div>
                        </div>
                        <div className="row">{shelfItems}</div>
                    </div>
                    <div className="row">
                        {pageContext.numPages > 1 && 
                            <Pagination pageContext={pageContext} type="shelf"/>
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($skip: Int!, $limit: Int!){
        allWordpressPost(
            filter: { categories: { elemMatch: { slug: { eq: "shelf" } } } }
            limit: $limit,
            skip: $skip
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
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
