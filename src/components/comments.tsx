import React, { useEffect, useState } from 'react'
import { formatDistance } from 'date-fns'
import rest from 'utils/rest'
import { Button, TextArea, TextInput, Title } from './ui'

export default function Comments({ postId }: { postId: number }) {
    const [comments, setComments] = useState<{
        meta: MetaState
        data: (CommentItem & { highlighted?: boolean })[]
    }>({
        meta: {
            error: false,
            mainLoading: true,
            subLoading: false,
        },
        data: [],
    })

    const updateState = (data: CommentItem[], meta?: Partial<MetaState>) =>
        setComments((p) => ({
            meta: {
                ...p.meta,
                ...meta,
            },
            data: [...p.data, ...data],
        }))

    const onHashChange = () => {
        if (location.hash.startsWith('#c')) {
            let id = location.hash.substring(2)
            setComments((previousData) => {
                let data = previousData.data.map((item) => {
                    if (item.id === id) {
                        item.highlighted = true
                    } else {
                        item.highlighted = false
                    }
                    return item
                })
                return {
                    meta: previousData.meta,
                    data: data,
                }
            })
        }
    }

    useEffect(() => {
        rest('restcomments/v1/list', {
            id: postId,
        })
            .then((res) => {
                if (res.result === 'success') {
                    updateState(res.data, {
                        error: false,
                        mainLoading: false,
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })

        window.addEventListener('hashchange', onHashChange)

        return () => {
            window.removeEventListener('hashchange', onHashChange)
        }
    }, [])

    return (
        <div className="my-10">
            <div className="text-center">
                <Title className="text-4xl text-fg-primary">Comments</Title>
            </div>
            <div className="my-16">
                <div className="pb-6">
                    {(() => {
                        if (comments.meta.error) {
                            return (
                                <p className="text-fg-primary">
                                    There was an error loading comments
                                </p>
                            )
                        } else if (comments.meta.mainLoading) {
                            return (
                                <React.Fragment>
                                    <CommentSkeleton />
                                    <CommentSkeleton />
                                </React.Fragment>
                            )
                        }

                        return comments.data.map((item) => {
                            let parent = item.parent_id
                            let foundParent: false | CommentItem = false
                            if (parent !== '0') {
                                let p = comments.data.find(
                                    (v) => v.id === parent
                                )
                                foundParent = p === undefined ? false : p
                            }
                            return (
                                <Comment
                                    {...item}
                                    parent={foundParent}
                                    key={`c-id-${item.id}`}
                                />
                            )
                        })
                    })()}
                </div>
                <div className="my-6">
                    <CommentForm />
                </div>
            </div>
        </div>
    )
}

function Comment(
    data: CommentItem & { parent: CommentItem | false; highlighted?: boolean }
) {
    let date = new Date(data.date)

    let formattedDate = formatDistance(date, new Date(), {
        addSuffix: true,
    })

    return (
        <div
            className={`w-full bg-bg-secondary rounded p-6 my-6 border-primary comment${
                data.highlighted ? ' border-l-2' : ''
            }`}
            id={`c${data.id}`}
        >
            <div className="flex items-center">
                <div className="rounded bg-bg-accent w-12 h-12">
                    <img src={data.avatar} alt="Gravatar image" />
                </div>
                <div className="ml-4 flex flex-col justify-center py-2">
                    <p className="text-fg-primary text-lg">{data.author}</p>
                    <p className="text-fg-light text-sm">{formattedDate}</p>
                </div>
            </div>
            {data.parent && (
                <div className="my-4">
                    <a href={`#c${data.parent_id}`} className="link text-sm">
                        Replying to {data.parent.author}'s comment
                    </a>
                </div>
            )}
            <div className="my-4 text-fg-primary">
                <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
            </div>
        </div>
    )
}

function CommentSkeleton() {
    return (
        <div className="w-full bg-bg-secondary opacity-75 rounded p-6 my-6">
            <div className="flex items-center">
                <div className="w-12 h-12 rounded bg-bg-accent skeleton"></div>
                <div className="ml-4 flex flex-col justify-center py-2">
                    <div className="w-24 h-3 bg-bg-accent skeleton"></div>
                    <div className="w-32 h-2 bg-bg-accent opacity-80 my-3 skeleton"></div>
                </div>
            </div>
            <div className="my-4">
                <div className="w-full h-3 bg-bg-accent skeleton"></div>
                <div className="w-1/3 my-3 h-3 bg-bg-accent skeleton"></div>
            </div>
        </div>
    )
}

function CommentForm() {
    return (
        <div className="my-4">
            <div className="px-6 my-6">
                <h3 className="text-fg-primary text-2xl font-bold">
                    Post a comment
                </h3>
            </div>
            <TextInput label="Name" name="name" />
            <TextInput label="Email" name="email" />
            <TextArea label="Comment" name="comment" />
            <div className="px-6 py-3">
                <Button title="Comment">Comment</Button>
            </div>
        </div>
    )
}
