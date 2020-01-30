import React from "react"
import Layout from "../components/layout"
import Wall from "../components/wall"
import About from "../components/about"
import Shelf from "../components/shelf"
import Blog from "../components/blog"
import Contact from "../components/contact"

import indexOg from "../images/indexog.jpg"

const seo = {
    title: "akzhy",
    description: `Hello, I am Akshay I am a web developer who is very passionate about web development and related fields. I've been into web designing since i was 15 and thats when i discovered my passion for it.I am also into a bit of graphic designing, though i am no pro at it.`,
    image: indexOg
}
const IndexPage = () => (
    <Layout seo={seo}>
        <Wall />
        <About />
        <Shelf />
        <Blog />
        <Contact />
    </Layout>
)

export default IndexPage
