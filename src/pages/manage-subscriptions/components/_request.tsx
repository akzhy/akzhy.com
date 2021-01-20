import { Button, TextInput } from 'components/ui'
import React, { useState } from 'react'
import { Loader } from 'react-feather'
import rest from 'utils/rest'

export default function RequestManagement() {
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
                            'restcomments/v1/subscriptions/request-management',
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
