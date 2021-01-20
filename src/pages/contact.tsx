import React from 'react'
import Contact from 'components/contact'
import Layout from 'components/layout'
import { Section } from 'components/ui'
import { graphql } from 'gatsby'

export default function ContactPage({ data }: {
    data: GatsbyTypes.ContactCardImageQuery
}) {
    return (
        <Layout
            seo={{
                title: 'Contact',
                description: `Contact me. Have any questions related any of the stuff that I've created/wrote or just want to chat? Use the contact form and I will reach back to you as soon as possible`,
                image: data.file?.childImageSharp?.original?.src
            }}
        >
            <Section title="Contact">
                <Contact />
            </Section>
        </Layout>
    )
}

export const query = graphql`
    query ContactCardImage {
        file(name: {eq: "contact"}, sourceInstanceName: {eq: "cardimages"}) {
            childImageSharp {
                original {
                    src
                }
            }
        }
    }
`