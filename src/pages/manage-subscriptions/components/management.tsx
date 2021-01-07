import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { CheckBox, ErrorLabel, Button } from 'components/ui'
import { Loader, X } from 'react-feather'
import rest from 'utils/rest'

export default function Management({ unsubKey }: { unsubKey: string }) {
    const [data, setData] = useState<
        (SubscriptionItem & { selected: boolean })[]
    >([])
    const [mainState, setMainState] = useState<
        'loading' | 'ready' | 'error' | 'saving' | 'error-key'
    >('loading')
    const [saveState, setSaveState] = useState<
        'loading' | 'success' | 'error' | 'error-key' | 'default'
    >('default')

    useEffect(() => {
        loadData()
    }, [])

    useEffect(() => {
        let timeout: NodeJS.Timeout
        if (saveState === 'success') {
            timeout = setTimeout(() => {
                if (saveState === 'success') {
                    setSaveState('default')
                }
            }, 10000)
        }

        return () => {
            clearTimeout(timeout)
        }
    }, [saveState])

    const loadData = () => {
        setMainState('loading')
        rest('restcomments/v1/subscriptions/list', {
            key: unsubKey,
        })
            .then((res) => {
                if (res.result) {
                    setMainState('ready')
                    setData(res.data.map((i) => ({ ...i, selected: false })))
                } else {
                    setMainState('error')
                }
            })
            .catch((err) => {
                setMainState('error')
            })
    }

    let returnData = (
        <div className="flex flex-col bg-bg-secondary rounded p-4 items-center justify-center">
            <Loader size={44} className="animate-spin" />
            <p className="mt-4 text-lg">Loading, please wait</p>
        </div>
    )

    if (mainState === 'error') {
        returnData = (
            <div className="flex flex-col bg-bg-secondary rounded p-4 items-center justify-center">
                <X size={44} className="text-fg-error" />
                <p className="mt-4 text-lg">
                    An error occured, please try again.
                </p>
                <button
                    onClick={loadData}
                    className="py-2 mt-3 px-4 bg-bg-accent rounded"
                >
                    Retry
                </button>
            </div>
        )
    } else if (mainState === 'ready') {
        if (data.length > 0) {
            const items = data.map((row, i) => (
                <ManagementRow
                    setData={setData}
                    data={data}
                    row={row}
                    index={i}
                    key={`mg-row-${i}`}
                />
            ))

            returnData = (
                <div>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="p-3 text-left">
                                    <CheckBox
                                        label=""
                                        inputProps={{
                                            onChange: (v) => {
                                                if (v.currentTarget.checked) {
                                                    setData(
                                                        data.map((item) => ({
                                                            ...item,
                                                            selected: true,
                                                        }))
                                                    )
                                                } else {
                                                    setData(
                                                        data.map((item) => ({
                                                            ...item,
                                                            selected: false,
                                                        }))
                                                    )
                                                }
                                            },
                                        }}
                                    />
                                </th>
                                <th className="p-3 text-left">Comment</th>
                                <th className="p-3 text-left">Post</th>
                            </tr>
                        </thead>
                        <tbody>{items}</tbody>
                    </table>
                    <div className="mt-10">
                        {saveState === 'error' && (
                            <ErrorLabel
                                error={{
                                    error: true,
                                    message:
                                        'An error occured while unsubscribing you',
                                }}
                            />
                        )}
                        {saveState === 'error-key' && (
                            <ErrorLabel
                                error={{
                                    error: true,
                                    message:
                                        'Your key has expired, please request a new one.',
                                }}
                            >
                                <p className="pl-8 p-4">
                                    <Link
                                        to="/manage-subscriptions"
                                        className="link"
                                    >
                                        Request subscription management
                                    </Link>
                                </p>
                            </ErrorLabel>
                        )}
                        {saveState === 'success' && (
                            <div className="border-2 border-fg-success rounded p-3 text-fg-primary">
                                <p>Subscriptions updated successfully</p>
                            </div>
                        )}
                        <div className="my-4"></div>
                        <Button
                            title="Unsuscribe selected"
                            state={
                                saveState === 'loading' ? 'disabled' : 'default'
                            }
                            onClick={() => {
                                setSaveState('loading')
                                console.log(data.filter((i) => i.selected))
                                rest(
                                    'restcomments/v1/subscriptions/unsubscribe',
                                    {
                                        key: unsubKey,
                                        unsub: data
                                            .filter((i) => i.selected)
                                            .map((i) => Number(i.comment_id)),
                                    }
                                )
                                    .then((res) => {
                                        if (res.result) {
                                            setSaveState('success')
                                            loadData()
                                        } else {
                                            if (res.error === 'key_expired') {
                                                setSaveState('error-key')
                                            } else {
                                                setSaveState('error')
                                            }
                                        }
                                    })
                                    .catch((err) => {
                                        setSaveState('error')
                                    })
                            }}
                        >
                            {saveState === 'loading'
                                ? 'Unsubscribing...'
                                : 'Unsubscribe Selected'}
                        </Button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="bg-bg-secondary p-6 text-fg-primary text-center">
                    <p>You are not subscribed to any comments</p>
                </div>
            )
        }
    }

    return <div className="my-6 p-4 rounded text-fg-primary">{returnData}</div>
}

const ManagementRow = ({
    row,
    setData,
    data,
    index,
}: {
    row: SubscriptionItem & { selected: boolean }
    setData: (a: (SubscriptionItem & { selected: boolean })[]) => void
    data: (SubscriptionItem & { selected: boolean })[]
    index: number
}) => {
    return (
        <tr className={`p-3 ${index % 2 === 0 && ' bg-bg-secondary rounded'}`}>
            <td className="p-3 text-left">
                <CheckBox
                    label=""
                    inputProps={{
                        checked: row.selected,
                        onChange: (v) => {
                            setData(
                                data.map((item, i) => {
                                    if (i === index) {
                                        return {
                                            ...item,
                                            selected: !item.selected,
                                        }
                                    } else {
                                        return item
                                    }
                                })
                            )
                        },
                    }}
                />
            </td>
            <td className="p-3 text-left">
                <div
                    dangerouslySetInnerHTML={{
                        __html: row.comment,
                    }}
                ></div>
            </td>
            <td className="p-3 text-left">
                <Link to={row.post_url} className="link">
                    {row.post_title}
                </Link>
            </td>
        </tr>
    )
}
