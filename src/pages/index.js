import React from "react"
import Layout from "../components/layout"
import Wall from "../components/wall"
import About from "../components/about"
import Shelf from "../components/shelf"
import Blog from "../components/blog"

const seo = {
    title: "akzhy"
}
const IndexPage = () => (
    <Layout seo={seo}>
        <Wall />
        <About />
        <Shelf />
        <Blog />
    </Layout>
)

export default IndexPage
