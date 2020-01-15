import React from "react"

import Layout from "../components/layout"
import Title from "../components/title"
import SEO from "../components/seo"

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <div className="section container">
            <Title data="404" />
            <p className="text-center">The page you are looking for doesn't exist <span role="img" aria-label="Emoji sad face">🙁</span>.</p>
        </div>
    </Layout>
)

export default NotFoundPage
