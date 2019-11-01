import React from "react"
import Layout from "../components/layout"
import Contact from "../components/contact"

const seo = {
    title: "Contact",
    description:
        "Contact me for anything related to web development, or if you just want to chat 😊",
}

export default () => {
    return (
        <Layout seo={seo}>
            <Contact />
        </Layout>
    )
}
