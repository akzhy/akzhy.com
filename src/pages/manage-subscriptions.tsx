import React, { useEffect, useState } from 'react'
import Layout from 'components/layout'
import { Button, CheckBox, Section, TextInput } from 'components/ui'
import { useLocation } from '@reach/router'
import { Check, Loader, X } from 'react-feather'
import rest from 'utils/rest'

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
            </Section>
        </Layout>
    )
}

const RequestManagement = () => {
    const [state, setState] = useState<
        'neutrel' | 'loading' | 'error' | 'success' | 'error-nosub'
    >('neutrel')
    const [email, setEmail] = useState('')
    return (
        <div className="my-6 bg-bg-secondary rounded p-4 py-8 text-fg-primary">
            <p className="px-6 my-4">
                Enter your email and an email will be sent to you containing the
                link to manage your subscriptions.
            </p>
            <TextInput
                label="Email"
                name="email"
                inputProps={{
                    onChange: (e) => {
                        setEmail(e.currentTarget.value)
                    },
                }}
            />
            <div className="px-6 my-6">
                {state === 'success' && (
                    <p className="text-fg-success">
                        Success, please check your email.
                    </p>
                )}
                {state === 'error' && (
                    <p className="text-fg-error">
                        An error occured while sending the mail, please try
                        again
                    </p>
                )}
                {state === 'error-nosub' && (
                    <p className="text-fg-error">
                        You are not subscribed to any comments.
                    </p>
                )}
            </div>
            <div className="px-6 my-6">
                <Button
                    title="Sumbit"
                    state={state === 'loading' ? 'disabled' : 'default'}
                    onClick={() => {
                        setState('loading')
                        rest(
                            'restcomments/v1/request-subscriptions-management',
                            {
                                email: email,
                            }
                        )
                            .then((res) => {
                                if (res.result) {
                                    setState('success')
                                } else {
                                    if (res.error === 'mail') {
                                        setState('error')
                                    } else {
                                        setState('error-nosub')
                                    }
                                }
                            })
                            .catch(() => {
                                setState('error')
                            })
                    }}
                >
                    <p className="flex items-center">
                        Submit{' '}
                        {state === 'loading' && (
                            <Loader className="ml-4 animate-spin" />
                        )}
                    </p>
                </Button>
            </div>
        </div>
    )
}

const Management = () => {
    return (
        <ul>
            <li>
                <CheckBox label="" />
            </li>
        </ul>
    )
}

const Unsubscribe = ({ unsubKey }: { unsubKey: string }) => {
    console.log(unsubKey)
    const [state, setState] = useState<'loading' | 'error' | 'success'>(
        'loading'
    )

    useEffect(() => {
        unsub()
    }, [unsubKey])

    const unsub = () => {
        if (state !== 'loading') setState('loading')
        console.log(unsubKey)
        rest('restcomments/v1/unsubscribe', {
            key: unsubKey,
        })
            .then((res) => {
                if (res.result) {
                    setState('success')
                } else {
                    setState('error')
                }
            })
            .catch((err) => {
                setState('error')
            })
    }

    let returnValue = (
        <React.Fragment>
            <Loader className="animate-spin" size={44} />
            <p className="mt-4 text-lg">Unsubscribing, please wait...</p>
        </React.Fragment>
    )

    if (state === 'success') {
        returnValue = (
            <React.Fragment>
                <Check size={44} className="text-fg-success" />
                <p className="mt-4 text-lg">
                    You have been successfully unsubscribed.
                </p>
            </React.Fragment>
        )
    } else if (state === 'error') {
        returnValue = (
            <React.Fragment>
                <X size={44} className="text-fg-error" />
                <p className="mt-4 text-lg">
                    An error occured, please try again.
                </p>
                <button
                    onClick={unsub}
                    className="py-2 mt-3 px-4 bg-bg-accent rounded"
                >
                    Retry
                </button>
            </React.Fragment>
        )
    }

    return (
        <div className="bg-bg-secondary p-6 rounded my-10 flex items-center justify-center text-fg-primary flex-col">
            {returnValue}
        </div>
    )
}
