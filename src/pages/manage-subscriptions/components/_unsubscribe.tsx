import React, { useEffect, useState } from 'react'
import { Loader, Check, X } from 'react-feather'
import rest from 'utils/rest'

export default function Unsubscribe({ unsubKey }: { unsubKey: string }) {
    const [state, setState] = useState<'loading' | 'error' | 'success'>(
        'loading'
    )

    useEffect(() => {
        unsub()
    }, [unsubKey])

    const unsub = () => {
        if (state !== 'loading') setState('loading')
        rest('restcomments/v1/subscriptions/unsubscribe', {
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
