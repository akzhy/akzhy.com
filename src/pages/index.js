import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Wall from "../components/wall"
import About from "../components/about"

const IndexPage = () => (
    <Layout>
        <Wall />
        <About />
    </Layout>
)

export default IndexPage
