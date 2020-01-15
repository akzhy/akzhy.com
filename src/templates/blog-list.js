import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import { BlogItem, Pagination } from "../components/items"
import { graphql } from "gatsby"

import "../styles/blog.scss"

const seo = {
    title: "Blog",
    description: ""
}

export default ({ data, pageContext }) => {    

    if(pageContext.currentPage !== 1){
        seo.title = `Blog, page ${pageContext.currentPage}`
    }

    const blogItems = [];
    data.allWordpressPost.edges.forEach((item,i) => {
        blogItems.push(
            <BlogItem title={item.node.title} description={item.node.acf.description} date={item.node.date} link={item.node.path} image={item.node.featured_media.localFile.childImageSharp.fluid} id={item.node.id} key={item.node.id}/>
        )
    })
    return (
        <Layout seo={seo}>
            <div className="section" id="blog">
                <div className="container">
                    <Title data="Blog"/>
                    <div className="contents">
                        <div className="row">
                            {blogItems}
                        </div>
                        {pageContext.numPages > 1 && 
                            <Pagination pageContext={pageContext} type="blog"/>
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
            filter: { categories: { elemMatch: { slug: { eq: "blog" } } } }
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
                                    ...GatsbyImageSharpFluid_noBase64
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
