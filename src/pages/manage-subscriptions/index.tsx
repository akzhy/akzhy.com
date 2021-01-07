import React, { useEffect, useState } from 'react'
import Layout from 'components/layout'
import { Section } from 'components/ui'
import { useLocation } from '@reach/router'
import RequestManagement from './components/request'
import Unsubscribe from './components/unsubscribe'
import Management from './components/management'

interface State {
    type: 'unsub' | 'manage' | 'request'
    email: string
    key: string
    subs: string[]
}

export default function ManageSubscriptionsPage() {
    const location = useLocation()

    const [data, setData] = useState<State>({
        type: 'unsub',
        email: '',
        key: '',
        subs: [],
    })

    const updateData = (v: Partial<State>) => setData((p) => ({ ...p, ...v }))

    useEffect(() => {
        const url = new URL(location.href)
        const searchParams = url.searchParams
        const unsub = searchParams.get('unsub')
        const key = searchParams.get('key')
        if (unsub) {
            updateData({
                key: unsub,
                type: 'unsub',
            })
        } else if (key) {
            updateData({
                key: key,
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
