import React from 'react'
import Contact from 'components/contact'
import Layout from 'components/layout'
import { Section } from 'components/ui'
import { graphql } from 'gatsby'

export default function ContactPage({
    data,
}: {
    data: GatsbyTypes.ContactPageQuery
}) {
    return (
        <Layout
            seo={{
                title: 'Contact',
                description: data.contact_page?.siteSettings?.contactPage
                    ?.seo_description as string,
                image:
                    data.contact_page?.siteSettings?.contactPage?.seo_image
                        ?.url,
            }}
        >
            <Section title="Contact">
                <Contact />
            </Section>
        </Layout>
    )
}

export const query = graphql`
    query ContactPage {
        contact_page: wp {
            siteSettings {
                contactPage {
                    seo_description
                    seo_image {
                        url
                    }
                }
            }
        }
    }
`
