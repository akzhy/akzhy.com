import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Title from "./title"

export default () => {
    const query = useStaticQuery(graphql`
        query {
            wordpressPage(slug: {eq: "about"}) {
                acf {
                    excerpt
                }
            }
        }
    `)

    return (
        <div className="section" id="about">
            <div className="container">
                <Title data="About"/>
                <div className="contents text-m text-center" dangerouslySetInnerHTML={{ __html: query.wordpressPage.acf.excerpt }}/>
            </div>
        </div>
    )
}
