import React from "react"
import { graphql } from "gatsby"
import Prism from "prismjs"

import Title from "../components/title"
import Layout from "../components/layout"

import "../styles/prism.css"
import "../styles/page.scss"


export default ({ data }) => {
    const post = data.wordpressPage;

    const seo = {
        title: post.title,
        description: post.acf.meta_description,
        image: post.featured_media.localFile.childImageSharp.fluid.src || false,
    }

    return (
        <Layout seo={seo}>
            <div className="section">
                <div className="container">
                    <div className="meta">
                        <Title data={post.title} />
                    </div>
                    <div className="page">
                        <CodeHighlighter content={post.content} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

class CodeHighlighter extends React.Component {
    componentDidMount() {
        setTimeout(() => Prism.highlightAll(), 10)
    }

    render() {
        return <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
    }
}

export const query = graphql`
    query($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            featured_media {
                localFile {
                    childImageSharp {
                        fluid {
                            src
                        }
                    }
                }
            }
            content
            acf {
                meta_description
            }
        }
    }
`
