import React from 'react'
import Layout from 'components/layout'
import { Section } from 'components/ui'

export default function NotFoundPage() {
    return (
        <Layout
            seo={{
                title: '404',
                description: `The page you're looking for doesn't exist.`,
            }}
        >
            <Section title="404">
                <div className="text-center text-fg-primary my-6">
                    <p>The page you are looking for doesn't exist 🙁.</p>
                </div>
            </Section>
        </Layout>
    )
}