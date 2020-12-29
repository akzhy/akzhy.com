import React from "react"
import Contact from "../components/contact"
import Layout from "../components/layout"
import { Section } from "../components/ui"

export default function ContactPage() {
    return (
        <Layout seo={{
            title: "Contact",
            description: "Contact me"
        }}>
            <Section title="Contact">
                <Contact />
            </Section>
        </Layout>
    )
}