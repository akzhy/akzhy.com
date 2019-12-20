import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Prism from "prismjs"
import AdSense from 'react-adsense';


import Title from "../components/title"
import Layout from "../components/layout"
import { Calendar, Pencil } from "../components/icons"
import { BlogItem, ShelfCard } from "../components/items"
import { Comments, CommentForm } from "../components/comments"

import "../styles/prism.css"
import "../styles/page.scss"
import "../styles/blog.scss"
import "../styles/shelf.scss"

export default class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            commentsUpdated: false
        }

        this.commentUpdateState = this.commentUpdateState.bind(this);
    }

    commentUpdateState(state){
        this.setState({
            commentsUpdated: state
        })
    }
 
    render() {  
        const data = this.props.data;
        const post = data.wordpressPost;

        const seo = {
            title: post.title,
            description: post.acf.meta_description,
            image: post.featured_media.localFile.childImageSharp.fluid.src,
        }

        const latestPosts = []

        data.latest.edges.forEach((item, i) => {
            if (item.node.categories[0].name === "blog") {
                latestPosts.push(
                    <BlogItem
                        title={item.node.title}
                        description={item.node.acf.description}
                        date={item.node.date}
                        image={
                            item.node.featured_media.localFile.childImageSharp
                                .fluid
                        }
                        link={item.node.path}
                        key={item.node.id}
                    />
                )
            } else {
                latestPosts.push(
                    <ShelfCard
                        title={item.node.title}
                        description={item.node.acf.description}
                        date={item.node.date}
                        image={
                            item.node.featured_media.localFile.childImageSharp
                                .fluid
                        }
                        link={item.node.path}
                        key={item.node.id}
                    />
                )
            }
        })

        return (
            <Layout seo={seo}>
                <Helmet>
                    <script data-ad-client="ca-pub-8484156190843706" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                </Helmet>
                <div className="section">
                    <div className="container">
                        <div className="meta">
                            <Title data={post.title} />
                            <p className="date" title="Posted date">
                                <span>
                                    <Calendar className="fill-primary" />
                                </span>
                                {post.date}
                            </p>
                            <p className="date" title="Modified date">
                                <span>
                                    <Pencil className="fill-primary" />
                                </span>
                                {post.modified}
                            </p>
                        </div>
                        <div className="page">
                            <CodeHighlighter content={post.content} />
                        </div>
                        <div className="comments">
                            <Title data={"Comments"} tag="h3" />
                            <Comments postId={post.wordpress_id} commentsUpdated={this.state.commentsUpdated} commentUpdateState={this.commentUpdateState}/>
                            <CommentForm postId={post.wordpress_id} commentUpdateState={this.commentUpdateState}/>
                        </div>
                        <div className="latest">
                            <Title data={"Latest Posts"} tag="h3" />
                            <div className="row">{latestPosts}</div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
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
    query($id: String!, $category: String!) {
        wordpressPost(id: { eq: $id }) {
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
            wordpress_id
            modified(formatString: "DD MMM YYYY")
            content
            date(formatString: "DD MMM YYYY")
            acf {
                meta_description
            }
        }
        latest: allWordpressPost(
            filter: {
                id: { ne: $id }
                categories: { elemMatch: { name: { eq: $category } } }
            }
        ) {
            edges {
                node {
                    id
                    title
                    categories {
                        name
                    }
                    featured_media {
                        localFile {
                            childImageSharp {
                                fluid {
                                    src
                                    ...GatsbyImageSharpFluid_noBase64
                                }
                            }
                        }
                    }
                    path
                    date(formatString: "DD MMM YYYY")
                    acf {
                        description
                    }
                }
            }
        }
    }
`
