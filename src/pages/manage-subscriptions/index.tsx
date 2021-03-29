import React, { useEffect, useState } from 'react'
import Layout from 'components/layout'
import { Section } from 'components/ui'
import { useLocation } from '@reach/router'
import { graphql } from 'gatsby'
import RequestManagement from './components/_request'
import Unsubscribe from './components/_unsubscribe'
import Management from './components/_management'

interface State {
    type: 'unsub' | 'manage' | 'request'
    email: string
    key: string
    subs: string[]
}

export default function ManageSubscriptionsPage({
    data: queryData,
}: {
    data: GatsbyTypes.ManageSubscriptionsCardImageQuery
}) {
    const location = useLocation()

    const [data, setData] = useState<State>({
        type: 'request',
        email: '',
        key: '',
        subs: [],
    })

    const updateData = (v: Partial<State>) => setData((p) => ({ ...p, ...v }))

    useEffect(() => {
        const url = new URL(location.href)
        const { searchParams } = url
        const unsub = searchParams.get('unsub')
        const key = searchParams.get('key')
        if (unsub) {
            updateData({
                key: unsub,
                type: 'unsub',
            })
        } else if (key) {
            updateData({
                key,
                type: 'manage',
            })
        } else {
            updateData({
                type: 'request',
            })
        }
    }, [])

    return (
        <Layout
            seo={{
                title: 'Manage Subscriptions',
                description: 'Manage Subscriptions',
                image: queryData.file?.childImageSharp?.original?.src,
            }}
        >
            <Section title="Manage Subscriptions">
                {data.type === 'unsub' && <Unsubscribe unsubKey={data.key} />}
                {data.type === 'request' && <RequestManagement />}
                {data.type === 'manage' && <Management unsubKey={data.key} />}
            </Section>
        </Layout>
    )
}

export const query = graphql`
    query ManageSubscriptionsCardImage {
        file(
            name: { eq: "managesubscription" }
            sourceInstanceName: { eq: "cardimages" }
        ) {
            childImageSharp {
                original {
                    src
                }
            }
        }
    }
`
