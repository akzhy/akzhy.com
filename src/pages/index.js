import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Wall from "../components/wall"
import About from "../components/about"
import Shelf from "../components/shelf"

const IndexPage = () => (
    <Layout>
        <Wall />
        <About />
        <Shelf />
    </Layout>
)

export default IndexPage
