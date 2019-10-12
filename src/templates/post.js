import React from "react"
import { graphql } from "gatsby"
import Prism from "prismjs";

import Title from "../components/title"
import Layout from "../components/layout"

import "../styles/prism.css"
import "../styles/page.less"

export default ({ data }) => {
    const post = data.wordpressPost;

    const seo = {
        title: post.title,
        description:  post.acf.meta_description,
        image: post.featured_media.localFile.childImageSharp.fluid.src
    }

    return (
        <Layout seo={seo}>
            <div className="section">
                <div className="container">
                    <div className="meta">
                        <Title data={post.title}/>
                        <p className="date">{post.date}</p>
                        <p className="date">{post.modified}</p>
                    </div>
                    <div className="page">
                        <CodeHighlighter content={ post.content }/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

class CodeHighlighter extends React.Component{
    componentDidMount(){
        setTimeout(() => Prism.highlightAll(), 10);
    }

    render(){
        return (
            <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
        )
    }
}

export const query = graphql`
    query($id: String!) {
        wordpressPost(id: {eq: $id}) {
            title
            categories {
                name
            }
            featured_media {
                localFile {
                    childImageSharp {
                        fluid {
                            src
                        }
                    }
                }
            }
            modified(formatString: "DD MMM YYYY")
            content
            date(formatString: "DD MMM YYYY")
            acf {
                meta_description
            }
        }
    }
`
